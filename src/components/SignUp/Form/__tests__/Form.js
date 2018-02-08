import React from 'react';
import { Form } from '../Form';

const updateMock = jest.fn();
const submitMock = jest.fn();
const shallowWrapper = props => shallow(<Form {...props} />);
const getWrapper = () => shallowWrapper({
  update: updateMock,
  submit: submitMock,
  email: 'foo@bar.com',
  fullname: 'John Doe',
  password: 'secret123',
  passwordStyle: 'Default',
  passwordConfirmation: 'secret123',
});

test('Form renders', () => expect(getWrapper()).toMatchSnapshot());

test('Form updates', () => {
  const wrapper = getWrapper();
  const inputs = wrapper.find('Input');
  const newValues = [
    'John Doe',
    'foo@bar.com',
    'top secret',
    'confirm top secret'
  ];
  const fields = ['fullname', 'email', 'password', 'passwordConfirmation'];

  inputs.forEach((input, idx) => {
    input.simulate('change', {
      target: { value: newValues[idx] },
    });
    expect(updateMock).lastCalledWith(fields[idx], newValues[idx]);
  });
});

test('Form submits', () => {
  const wrapper = getWrapper();
  const form = wrapper.find('form');
  const preventDefaultMock = jest.fn();
  form.simulate('submit', {
    preventDefault: preventDefaultMock,
  });
  expect(preventDefaultMock).toHaveBeenCalledTimes(1);
  expect(submitMock).toHaveBeenCalledWith({
    fullname: 'John Doe',
    password: 'secret123',
    email: 'foo@bar.com',
  });
});

