'use strict'

// https://www.codewars.com/kata/5a4138acf28b82aa43000117

function adjacentElementsProduct(array) {
  const multiplyArr = array.reduce((result, num, i, arr) => {
    const multiplying = num * arr[i + 1];

    if (!isNaN(multiplying)) {
      result.push(multiplying);
    }

    return result;
  }, []);

  return Math.max(...multiplyArr);
}
