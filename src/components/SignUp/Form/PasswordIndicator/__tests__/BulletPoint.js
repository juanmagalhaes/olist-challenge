import React from 'react';
import {
  Bullet,
  BulletPoint,
  BulletPoints,
} from '../BulletPoint';

describe('Bullet', () => {
  const shallowWrapper = props => shallow(<Bullet {...props} />);

  test('renders', () => {
    const wrapper = shallowWrapper({
      isEmpty: true,
    });
    expect(wrapper).toMatchSnapshot();
  });

  test('renders with success style', () => {
    const wrapper = shallowWrapper({
      isEmpty: false,
      isValid: true,
    });
    expect(wrapper).toMatchSnapshot();
  });

  test('renders with danger style', () => {
    const wrapper = shallowWrapper({
      isEmpty: false,
    });
    expect(wrapper).toMatchSnapshot();
  });
});

describe('BulletPoint', () => {
  const shallowWrapper = props => shallow(<BulletPoint {...props} />);

  test('renders', () => {
    const wrapper = shallowWrapper({
      name: 'foo',
      isEmpty: true,
      validation: {
        foo: {
          isValid: true,
          msg: 'bar',
        },
      },
    });
    expect(wrapper).toMatchSnapshot();
  });

});

describe('BulletPoints', () => {
  const shallowWrapper = props => shallow(<BulletPoints {...props} />);

  test('renders', () => {
    const wrapper = shallowWrapper({
      isEmpty: true,
      passwordStrength: {},
    });
    expect(wrapper).toMatchSnapshot();
  });

});

