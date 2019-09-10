import React from 'react';
import utils from '../math-utils';
import PlayNumber from './PlayNumber';

const NumberList = props => {
  return (
    <div className='right'>
      {utils.range(1, 9).map(number => (
        <PlayNumber
          key={number}
          status={props.numberStatus(number)}
          number={number}
          onClick={props.onClick}
        />
      ))}
    </div>
  );
};

export default NumberList;
