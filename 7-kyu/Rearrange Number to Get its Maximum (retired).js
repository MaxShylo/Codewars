'use strict'

// https://www.codewars.com/kata/563700da1ac8be8f1e0000dc

var maxRedigit = function(num) {
  if (num.toString().length !== 3) {
    return null;
  }

  return +num.toString().split('').sort((x, y) => y - x).join('');
};
