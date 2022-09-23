'use strict'

// https://www.codewars.com/kata/561046a9f629a8aac000001d

function matchArrays(v, r) {
  return v.reduce((count, x) => {
    const isPresent = r.some(char => char === x);

    if (isPresent) {
      count++;
    }

    return count;
  }, 0)
}
