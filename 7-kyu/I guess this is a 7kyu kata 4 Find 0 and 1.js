'use strict'

// https://www.codewars.com/kata/57d237f25dc38ede6e00026b

function find01(arr) {
  let count = 0;

  for (let line = 1; line < arr.length - 1; line++) {
    for (let i = 1; i < arr[line].length - 1; i++) {
      const currentNum = arr[line][i]
      const isSurrounded = (arr[line - 1][i] !== currentNum)
        && (arr[line][i + 1] !== currentNum)
        && (arr[line + 1][i] !== currentNum)
        && (arr[line][i - 1] !== currentNum);

      if (isSurrounded) {
        count++;
      }
    }
  }

  return count;
}
