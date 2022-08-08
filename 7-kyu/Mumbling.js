'use strict'

// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript

function accum(s) {
  return s.split('')
  .map((item, index) => item.toUpperCase() + item.toLowerCase().repeat(index))
  .join('-');
}
