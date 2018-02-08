// @flow

import React from 'react';
import { Form } from './Form';
import { Logo } from '../Logo';
import styles from './SignUp.module.scss';

const SignUp = () => (
  <div className={styles.box}>
    <div className={styles.logo}>
      <Logo />
    </div>
    <p className={styles.headding}>
      Crie sua conta
    </p>
    <Form />
  </div>
);

export { SignUp };

