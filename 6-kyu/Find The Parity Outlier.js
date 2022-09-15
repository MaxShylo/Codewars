'use strict'

// https://www.codewars.com/kata/5526fc09a1bbd946250002dc

function findOutlier(integers) {
  const evenNums = [];
  const oddNums = [];

  integers.forEach(num => {
    if (num % 2 === 0) {
      evenNums.push(num);
    } else {
      oddNums.push(num);
    }
  })

  return evenNums.length > oddNums.length
    ? oddNums[0]
    : evenNums[0];
}
