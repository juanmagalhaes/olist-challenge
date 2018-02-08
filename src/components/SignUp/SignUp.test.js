import React from 'react';
import { SignUp } from '~/components/SignUp';

test('SignUp', () => expect(shallow(<SignUp />)).toMatchSnapshot())

