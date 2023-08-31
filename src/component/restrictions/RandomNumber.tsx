import React from 'react';

type RandomNumberProps = {
  value: number;
  isPositive?: boolean;
  isNegative?: boolean;
  isZero?: boolean;
};

const RandomNumber: React.FC<RandomNumberProps> = ({ value, isPositive, isNegative, isZero }) => {
  return (
    <div>
      {value}
      {isPositive && " positive"}
      {isNegative && " negative"}
      {isZero && ' zero'}
    </div>
  );
};

export default RandomNumber;
