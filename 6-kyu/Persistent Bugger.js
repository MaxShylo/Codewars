'use strict'

// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec

function persistence(num) {
  let count = 0;
  let currentNum = num.toString();

  while (currentNum.length > 1) {
    count++;
    currentNum = currentNum.split('').reduce((multi, x) => multi * x).toString();
  }
  
  return count;
}
