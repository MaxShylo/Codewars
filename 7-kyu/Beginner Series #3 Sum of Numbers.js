'use strict'

// https://www.codewars.com/kata/55f2b110f61eb01779000053/train/javascript

function getSum(a, b) {
  let count = 0;
  const start = a < b ? a : b;
  const end = a > b ? a : b;

  if (a === b) {
    return a;
  }

  for (let i = start; i <= end; i++) {
    count += i;
  }

  return count;
}
