// @flow

import { UPDATE, VALIDATE } from './constants';
import type { State, Action } from './types';

export const initialState: State = {
  email: '',
  password: '',
  fullname: '',
  passwordConfirmation: '',
  validation: {
    passwordStrength: {
      minLength: {
        isValid: false,
        msg: 'Pelo menos 6 caracteres',
      },
      containsUppercase: {
        isValid: false,
        msg: 'Pelo menos 1 letra maiúscula',
      },
      containsNumber: {
        isValid: false,
        msg: 'Pelo menos 1 número',
      },
      validCount: 0,
    },
  },
};

function signUpFormReducer(state: State = initialState, action: Action): State {
  const { type, payload } = action;
  switch (type) {
    case UPDATE:
      return {
        ...state,
        ...payload,
      };
    case VALIDATE:
      const { password } = payload,
        minLength = password.length >= 6,
        containsUppercase = /[A-Z]/g.test(password),
        containsNumber = /\d/.test(password),
        validCount = [
          minLength,
          containsUppercase,
          containsNumber,
        ].reduce((acc, criteria) => criteria ? ++acc : acc, 0);

      return {
        ...state,
        validation: {
          passwordStrength: {
            minLength: {
              ...state.validation.passwordStrength.minLength,
              isValid: minLength,
            },
            containsUppercase: {
              ...state.validation.passwordStrength.containsUppercase,
              isValid: containsUppercase,
            },
            containsNumber: {
              ...state.validation.passwordStrength.containsNumber,
              isValid: containsNumber,
            },
            validCount: validCount,
          },
        },
      };
    default:
      return state;
  }
}

export default signUpFormReducer;

