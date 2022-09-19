'use strict'

// https://www.codewars.com/kata/5aec1ed7de4c7f3517000079

function firstNSmallest(array, n) {
  const smallest = [...array].sort((a, b) => a - b).slice(0, n);

  return array.filter((num) => {
    if (smallest.includes(num)) {
      smallest.splice(smallest.indexOf(num), 1);

      return true;
    }
  });
}
