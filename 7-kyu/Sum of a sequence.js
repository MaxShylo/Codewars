'use strict'

// https://www.codewars.com/kata/sum-of-a-sequence

const sequenceSum = (begin, end, step) => {
  let result = 0;

  if (begin > end) {
    return result;
  }

  for (let i = begin; i <= end; i += step) {
    result += i;
  }

  return result;
};
