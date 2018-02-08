// @flow

import { UPDATE, VALIDATE } from './constants';

export type UpdateAction = {
  type: typeof UPDATE,
  payload: { [string]: string }
}

export type ValidateAction = {
  type: typeof VALIDATE,
  payload: {
    password: string,
  },
}

export type Action =
  | UpdateAction
  | ValidateAction;

export type ValidationCriteriaState = {
  msg?: string,
  isValid: boolean,
}

export type PasswordStrengthState = {
  validCount: number,
  minLength: ValidationCriteriaState,
  containsNumber: ValidationCriteriaState,
  containsUppercase: ValidationCriteriaState,
}

export type Validation = {
  passwordStrength: PasswordStrengthState,
}

export type FormState = {
  email: string,
  password: string,
  fullname: string,
  passwordConfirmation: string,
}

export type State = FormState & {
  validation: Validation,
}

