'use strict'

// https://www.codewars.com/kata/5d0d1c14c843440026d7958e

function findNeededGuards(k) {
  let count = 0;

  for (let i = 0; i < k.length; i++) {
    if (k[i] === false && k[i + 1] === false) {
      count++;
      i++;
    }
  }

  return count;
}
