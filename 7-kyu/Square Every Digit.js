'use strict'

https://www.codewars.com/kata/546e2562b03326a88e000020

function squareDigits(num) {
  return +num.toString()
    .split('')
    .map(n => n ** 2)
    .join('');
}
