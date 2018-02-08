// @flow

import * as React from 'react';
import classnames from 'classnames';
import styles from './BulletPoint.module.scss';

type BulletProps = {
  isValid: boolean,
  isEmpty: boolean,
}

const Bullet = ({ isValid, isEmpty }: BulletProps) => (
  <div className={classnames(
    styles.bullet,
    { [styles.bulletSuccess]: isValid && !isEmpty },
    { [styles.bulletDanger]: !isValid  && !isEmpty }
  )} />
);

// XXX Create a type for validation
// Object is far too abstract
type BulletPointProps = {
  name: string,
  isEmpty: boolean,
  validation: Object,
}

const BulletPoint = ({ name, validation, isEmpty }: BulletPointProps) => (
  <div className={styles.bulletPoint}>
    <Bullet
      isEmpty={isEmpty}
      isValid={validation[name].isValid}
    />
    <span className={styles.text}>
      {validation[name].msg}
    </span>
  </div>
);

// XXX Create a type for passwordStrength
// Object is far too abstract
type BulletPointsProps = {
  isEmpty: boolean,
  passwordStrength: Object,
}

const BulletPoints = ({ passwordStrength, isEmpty }: BulletPointsProps) => {
  const bullets = [
    'minLength',
    'containsUppercase',
    'containsNumber',
  ];
  return (
    <div className={styles.bullets}>
      {bullets.map((bullet, idx) => (
        <BulletPoint
          key={idx}
          name={bullet}
          isEmpty={isEmpty}
          validation={passwordStrength}
        />
      ))}
    </div>
  );
}

export { BulletPoints, BulletPoint, Bullet };

