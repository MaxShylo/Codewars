'use strict'

// https://www.codewars.com/kata/586909e4c66d18dd1800009b/train/javascript

const multiplyAll = (arrOfIntegers) => {
  return (multiplier) => arrOfIntegers.map(num => num * multiplier);
};
