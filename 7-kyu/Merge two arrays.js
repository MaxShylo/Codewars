'use strict'

// https://www.codewars.com/kata/583af10620dda4da270000c5

function mergeArrays(a, b) {
  const result = [];
  const longestArrLength = (a.length > b.length) ? a.length : b.length;

  for (let i = 0; i < longestArrLength; i++) {
    if (!a[i]) {
      result.push(b[i]);
    } else if (!b[i]) {
      result.push(a[i]);
    } else {
      result.push(a[i]);
      result.push(b[i]);
    }
  }

  return result;
}
