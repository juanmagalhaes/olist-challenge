import React from 'react';
import { Input } from '~/basic-components/Input';

test('Input text', () => expect(shallow(<Input />)).toMatchSnapshot())

