'use strict'

// https://www.codewars.com/kata/5d376cdc9bcee7001fcb84c0

function oddOnesOut(nums) {
  const count = nums.reduce((prev, num) => {
    if (!prev[num]) {
      prev[num] = 1;
    } else {
      prev[num]++;
    }

    return prev;
  }, {})

  return nums.filter(num => count[num] % 2 === 0);
}
