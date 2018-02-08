// @flow

import * as React from 'react';
import styles from './Input.module.scss';
import classnames from 'classnames';

type Props = {
  type?: string,
  className?: string,
}

const Input = ({
  type="text",
  className='',
  ...rest,
}: Props) => (
  <input
    {...rest}
    type={type}
    className={classnames(
      styles.input,
      className
    )}
  />
);

export { Input };

