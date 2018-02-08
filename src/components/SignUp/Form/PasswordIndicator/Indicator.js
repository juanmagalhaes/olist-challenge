// @flow

import * as React from 'react';
import styles from './Indicator.module.scss';
import classnames from 'classnames';

type IndicatorProps = {
  style: string,
}

const Indicator = ({ style }: IndicatorProps) => (
  <div className={classnames(
    styles.indicator,
    styles[`indicator${style}`]
  )} />
);

type IndicatorsProps = {
  validCount: number,
}

const Indicators = ({ validCount }: IndicatorsProps) => {
  const getStyles = (): Array<string> => {
    switch (validCount) {
      case 1: return ['Danger', 'Default', 'Default'];
      case 2: return ['Waring', 'Waring', 'Default'];
      case 3: return ['Success', 'Success', 'Success'];
      default: return ['Default', 'Default', 'Default'];
    }
  }

  return (
    <div className={styles.indicators}>
      {getStyles().map((style, idx) => (
        <Indicator key={idx} style={style} />
      ))}
    </div>
  );
}

export { Indicator, Indicators };

