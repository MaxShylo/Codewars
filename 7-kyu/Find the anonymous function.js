'use strict'

// https://www.codewars.com/kata/55a12bb8f0fac1ba340000aa

function FindFunction(func, arr) {
  const correctFunction = func.find(el => typeof el === 'function');

  return arr.filter(correctFunction);
}
