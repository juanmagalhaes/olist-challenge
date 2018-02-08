import React from 'react';
import { Logo } from '~/components/Logo';

test('Logo', () => expect(shallow(<Logo />)).toMatchSnapshot())

