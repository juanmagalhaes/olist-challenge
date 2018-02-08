// @flow

import { createAction } from 'redux-actions';
import {
  SUBMIT,
  UPDATE,
  VALIDATE,
} from './constants';
import client from '~/api/client';
import type { ValidateAction, UpdateAction } from './types';
import type { ThunkAction } from '~/types/redux';

export const submit = createAction(SUBMIT, async credentials => {
  return await client.submitCredentials(credentials);
});

export function update(field: string, newValue: string): ThunkAction {
  return dispatch => {
    if (field === 'password') {
      const validateAction: ValidateAction = {
        type: VALIDATE,
        payload: { password: newValue },
      };
      dispatch(validateAction);
    }

    const updateAction: UpdateAction = {
      type: UPDATE,
      payload: { [field]: newValue },
    };
    dispatch(updateAction);
  }
}

