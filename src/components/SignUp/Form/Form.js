// @flow

import React from 'react';
import { connect } from 'react-redux';
import { Input, Label, Button } from '~/basic-components';
import { PasswordIndicator } from './PasswordIndicator';
import { update, submit } from './actions';
import styles from './Form.module.scss';
import inputStyles from '~/basic-components/Input/Input.module.scss';
import type { FormState } from './types';
import type { ThunkAction } from '~/types/redux';

type Credentials = {
  email: string,
  password: string,
  fullname: string,
}

type Props = FormState & {
  passwordStyle: string,
  update: (string, string) => ThunkAction,
  submit: (Credentials) => ThunkAction,
}

const Form = ({
  update,
  submit,
  email,
  password,
  fullname,
  passwordStyle,
  passwordConfirmation,
}: Props) => {
  const disabled = (!password || !passwordConfirmation)
    || password !== passwordConfirmation;
  return (
    <form
      className={styles.form}
      onSubmit={evt => {
        evt.preventDefault();
        return submit({
          fullname,
          password,
          email,
        })
      }}
    >
      <div className={styles.formGroup}>
        <Label htmlFor="fullname">
          Nome Completo
        </Label>
        <Input
          id="fullname"
          value={fullname}
          autoComplete="on"
          onChange={({ target }) => update('fullname', target.value)}
        />
      </div>
      <div className={styles.formGroup}>
        <Label htmlFor="email">
          E-mail
        </Label>
        <Input
          id="email"
          type="email"
          value={email}
          autoComplete="on"
          onChange={({ target }) => update('email', target.value)}
        />
      </div>
      <div className={styles.formGroup}>
        <Label htmlFor="password">
          Senha
        </Label>
        <Input
          id="password"
          type="password"
          value={password}
          autoComplete="on"
          aria-invalid={passwordStyle !== 'Success'}
          className={inputStyles[`input${passwordStyle}`]}
          onChange={({ target }) => update('password', target.value)}
        />
        <PasswordIndicator />
      </div>
      <div className={styles.formGroup}>
        <Label htmlFor="passwordConfirmation">
          Confirme sua senha
        </Label>
        <Input
          type="password"
          autoComplete="on"
          id="passwordConfirmation"
          value={passwordConfirmation}
          onChange={({ target }) => update('passwordConfirmation', target.value)}
        />
      </div>
      <div>
        <Button
          type="submit"
          color="success"
          disabled={disabled}
        >
          Criar conta
        </Button>
      </div>
    </form>
  )
};

const passwordStyleSelector = ({ validation }) => {
  switch (validation.passwordStrength.validCount) {
    case 1: return 'Danger';
    case 2: return 'Waring';
    case 3: return 'Success';
    default: return 'Default';
  }
}

const mapStateToProps = ({ signUpForm }) => ({
  email: signUpForm.email,
  fullname: signUpForm.fullname,
  password: signUpForm.password,
  passwordStyle: passwordStyleSelector(signUpForm),
  passwordConfirmation: signUpForm.passwordConfirmation,
});

const mapDispatchToProps = (dispatch) => ({
  update: (field, value) => dispatch(update(field, value)),
  submit: async credentials => await dispatch(submit(credentials)),
});

const FormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);

export { FormContainer, Form };

