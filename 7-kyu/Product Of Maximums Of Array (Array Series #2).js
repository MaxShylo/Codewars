'use strict'

// https://www.codewars.com/kata/5a63948acadebff56f000018

function maxProduct(numbers, size) {
  return numbers.sort((a, b) => b - a)
    .filter((num, i) => i < size)
    .reduce((multiply, x) => multiply * x);
}
