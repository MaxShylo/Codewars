'use strict'

// https://www.codewars.com/kata/541c8630095125aba6000c00

function digitalRoot(n) {
  let finalSum = [...n.toString()].map(num => +num).reduce((sum, x) => sum + x, 0);

  if (finalSum.toString().length > 1) {
    return digitalRoot(finalSum);
  }

  return finalSum;
}
