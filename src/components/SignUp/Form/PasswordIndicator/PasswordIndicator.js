// @flow

import * as React from 'react';
import { connect } from 'react-redux';
import { Indicators } from './Indicator';
import { BulletPoints } from './BulletPoint';

// XXX Create a type for passwordStrength
// Object is far too abstract
type Props = {
  isEmpty: boolean,
  passwordStrength: Object,
}

const PasswordIndicator = ({ passwordStrength, isEmpty }: Props) => (
  <div>
    <Indicators validCount={passwordStrength.validCount} />
    <BulletPoints
      isEmpty={isEmpty}
      passwordStrength={passwordStrength}
    />
  </div>
);

const mapStateToProps = ({ signUpForm }) => ({
  isEmpty: signUpForm.password.length === 0,
  passwordStrength: signUpForm.validation.passwordStrength,
});

const PasswordIndicatorContainer = connect(
  mapStateToProps,
)(PasswordIndicator);

export { PasswordIndicatorContainer, PasswordIndicator };

