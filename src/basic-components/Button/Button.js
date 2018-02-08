// @flow

import * as React from 'react';
import classNames from 'classnames';
import styles from './Button.module.scss';

type Props = {
  color: string,
  children: React.Node,
}

const Button = ({ color, onClick, children, ...rest }: Props) => (
  <button
    {...rest}
    className={classNames(
      styles.button,
      { [styles.buttonSuccess]: color === 'success' }
    )}
    onClick={evt => {
      // add click animation
      evt.persist();
      const { currentTarget } = evt;
      currentTarget.classList.add(styles.buttonClicked);
      setTimeout(
        () => currentTarget.classList.remove(styles.buttonClicked),
        1000
      );
    }}
  >
    {children}
  </button>
);

export { Button };

