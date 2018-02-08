import { update, submit } from '../actions';
import { UPDATE, VALIDATE, SUBMIT } from '../constants';

test('SignUpForm UPDATE ACTION', () => {
  const thunk = update('foo', 'bar');
  const stub = jest.fn();
  thunk(stub);
  expect(stub).toHaveBeenCalledTimes(1);
  expect(stub).toHaveBeenCalledWith({
    type: UPDATE,
    payload: { foo: 'bar' },
  });
});

test('SignUpForm UPDATE ACTION for password', () => {
  const thunk = update('password', 'Top Secret');
  const stub = jest.fn();
  thunk(stub);
  expect(stub).toHaveBeenCalledTimes(2);
  expect(stub).toHaveBeenCalledWith({
    type: UPDATE,
    payload: { password: 'Top Secret' },
  });
  expect(stub).toHaveBeenCalledWith({
    type: VALIDATE,
    payload: { password: 'Top Secret' },
  });
});

jest.mock('~/api/client', () => ({
  submitCredentials: jest.fn(),
}));

test('SignUpForm SUBMIT ACTION', () => {
  const credentials = {
    fullname: 'john',
    email: 'john@doe.com',
    password: 'Passowrd123',
  };

  const { submitCredentials } = require('~/api/client');
  submitCredentials.mockReturnValue(Promise.resolve(credentials));

  const successfulAction = submit(credentials);
  expect(successfulAction.type).toBe(SUBMIT);
  successfulAction.payload.then(success => {
    expect(success).toEqual(credentials);
  }).catch(() => fail('Should not throw error'));

  submitCredentials.mockReturnValue(Promise.reject('error'));
  const failedAction = submit(credentials);
  expect(failedAction.type).toBe(SUBMIT);
  failedAction.payload.then(() => fail('Should not throw error'))
    .catch(error => expect(error).toBe('error'));
});

