'use strict'

// https://www.codewars.com/kata/55fd2d567d94ac3bc9000064/train/javascript

function rowSumOddNumbers(n) {
	const triangle = [];
  let currentRow = 1;
  let currentNumber = 1;


  while (currentRow <= n) {
    const row = [];

    for (let num = currentNumber; num > 0; num += 2) {
      row.push(num);
      currentNumber += 2;

      if (row.length === currentRow) {
        break;
      }
    }

    currentRow++;
    triangle.push(row);
  }

  return triangle[n - 1].reduce((sum, x) => sum + x, 0);
}
