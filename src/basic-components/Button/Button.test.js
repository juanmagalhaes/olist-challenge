import React from 'react';
import { Button } from '../Button';

test('Button', () => expect(shallow(<Button />)).toMatchSnapshot());
test('Button success', () => expect(shallow(<Button color="success" />)).toMatchSnapshot());
test('Button with text', () => expect(shallow(<Button>Submit</Button>)).toMatchSnapshot());

