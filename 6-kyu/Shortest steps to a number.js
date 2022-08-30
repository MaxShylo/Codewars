'use strict'

// https://www.codewars.com/kata/5cd4aec6abc7260028dcd942

function shortestStepsToNum(num) {
  let count = 0;
  let currentNum = num;

  while (true) {
    if (currentNum % 2 === 0) {
      currentNum = currentNum / 2;
    } else {
      currentNum--;
    }

    if (currentNum === 0) {
      return count;
    } else {
      count++;
    }
  }
}
