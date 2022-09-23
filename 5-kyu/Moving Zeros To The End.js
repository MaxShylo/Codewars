'use strict'

// https://www.codewars.com/kata/moving-zeros-to-the-end/javascript

function moveZeros(arr) {
  const zeroArr = [];

  return arr.filter(char => {
    if (char === 0) {
      zeroArr.push(char);

      return false;
    }

    return true;
  }).concat(zeroArr);
}
