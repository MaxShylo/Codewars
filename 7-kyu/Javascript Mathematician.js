'use strict'

// https://www.codewars.com/kata/55c211cce1ef691d9b000061/train/javascript

function calculate(...args1) {
  return (...args2) => [...args1, ...args2].reduce((sum, x) => sum + x, 0);
}
