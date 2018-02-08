import React from 'react';
import {
  Indicator,
  Indicators,
} from '../Indicator';

describe('Indicator', () => {
  const shallowWrapper = props => shallow(<Indicator {...props} />);

  test('renders', () => {
    const wrapper = shallowWrapper({ style: 'Default' });
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Indicators', () => {
  const shallowWrapper = props => shallow(<Indicators {...props} />);

  test('renders', () => {
    expect(shallowWrapper({ validCount: 0 })).toMatchSnapshot();
    expect(shallowWrapper({ validCount: 1 })).toMatchSnapshot();
    expect(shallowWrapper({ validCount: 2 })).toMatchSnapshot();
    expect(shallowWrapper({ validCount: 3 })).toMatchSnapshot();
  });
});

