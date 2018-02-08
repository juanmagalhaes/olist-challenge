// @flow

import * as React from 'react';
import styles from './Label.module.scss';

type Props = {
  children: React.Node,
}

const Label = ({ children, ...rest }: Props) => (
  <label
    {...rest}
    className={styles.label}
  >
    {children}
  </label>
);

export { Label };

