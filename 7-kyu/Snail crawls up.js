'use strict'

// https://www.codewars.com/kata/5b93fecd8463745630001d05/train/javascript

function snail(column, day, night) {
  let count = 0;
  let days = 0;

  for (let i = 0; i >= 0; i++) {
    days += day;
    count++;
    if (days >= column) {
      return count;
    } else {
      days -= night;
    }
  }
}

console.log(snail(3, 2, 1)) //2