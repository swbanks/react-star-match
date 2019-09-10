/* eslint-disable linebreak-style */
import React from 'react';
import utils from '../math-utils';

const StarDisplay = props => {
  return (
    <div className='left'>
      {utils.range(1, props.starCount).map(elem => (
        <Star key={elem} />
      ))}
    </div>
  );
};

const Star = () => <div className='star' />;

export default StarDisplay;
