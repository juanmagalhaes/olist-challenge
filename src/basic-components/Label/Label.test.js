import React from 'react';
import { Label } from '~/basic-components/Label';

test('Label', () => expect(shallow(<Label>Full Name</Label>)).toMatchSnapshot())

