import signUpFormReducer, { initialState } from '../reducers';
import { UPDATE, VALIDATE } from '../constants';

test('SignUpForm UPDATE REDUCER', () => {
  expect(signUpFormReducer({}, {
    type: UPDATE,
    payload: { foo: 'bar' },
  })).toEqual({ foo: 'bar' });
});

test('SignUpForm default REDUCER', () => {
  expect(signUpFormReducer({}, {
    type: 'OTHER',
    payload: { foo: 'bar' },
  })).toEqual({});
});

function newState({
  minLength=false,
  containsUppercase=false,
  containsNumber=false,
  validCount=0
}) {
  return {
    email: '',
    password: '',
    fullname: '',
    passwordConfirmation: '',
    validation: {
      passwordStrength: {
        minLength: {
          isValid: minLength,
          msg: 'Pelo menos 6 caracteres',
        },
        containsUppercase: {
          isValid: containsUppercase,
          msg: 'Pelo menos 1 letra maiúscula',
        },
        containsNumber: {
          isValid: containsNumber,
          msg: 'Pelo menos 1 número',
        },
        validCount,
      },
    },
  }
}

function testValidateReducer(password, newState) {
  expect(signUpFormReducer(initialState, {
    type: VALIDATE,
    payload: { password: password },
  })).toEqual(newState);
}

test('SignUpForm VALIDATE REDUCER', () => {
  testValidateReducer('foo', initialState);

  testValidateReducer('Foo', newState({
    containsUppercase: true,
    validCount: 1,
  }));

  testValidateReducer('foo1', newState({
    containsNumber: true,
    validCount: 1,
  }));

  testValidateReducer('fooooo', newState({
    minLength: true,
    validCount: 1,
  }));

  testValidateReducer('Fooooo', newState({
    containsUppercase: true,
    minLength: true,
    validCount: 2,
  }));

  testValidateReducer('Foo1', newState({
    containsUppercase: true,
    containsNumber: true,
    validCount: 2,
  }));

  testValidateReducer('foooo1', newState({
    containsNumber: true,
    minLength: true,
    validCount: 2,
  }));

  testValidateReducer('Foooo1', newState({
    containsUppercase: true,
    containsNumber: true,
    minLength: true,
    validCount: 3,
  }));
});

