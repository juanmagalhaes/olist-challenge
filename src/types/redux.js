// @flow

import type {
  State as SignUpFormState,
  Action as SignUpFormAction,
} from '~/components/SignUp/Form';

export type State = {
  signUpForm: State,
}

export type Action =
  | SignUpFormAction

export type GetState = () => State;
export type PromiseAction = Promise<Action>;
export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
export type Dispatch = (action: Action | ThunkAction | PromiseAction | Array<Action>) => any;

