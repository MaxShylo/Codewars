'use strict'

// https://www.codewars.com/kata/570523c146edc287a50014b1

function numberJoy(n) {
  const sum = n.toString().split('').reduce((sum, x) => sum + +x, 0);
  const reversed = +sum.toString().split('').reverse().join('');

  return sum * reversed === n;
}
