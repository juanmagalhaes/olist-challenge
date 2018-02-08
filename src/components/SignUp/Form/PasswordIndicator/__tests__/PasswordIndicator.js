import React from 'react';
import {
  PasswordIndicator,
} from '../PasswordIndicator';


test('renders', () => {
  expect(shallow(
    <PasswordIndicator
      isEmpty={true}
      passwordStrength={{}}
    />
  )).toMatchSnapshot();
});

