'use strict'

// https://www.codewars.com/kata/58a66c208b88b2de660000c3

function missingValues(arr) {
  let x, y;

  const countOfValues = arr.reduce((prev, x) => (prev[x] = (prev[x] || 0) + 1, prev), {});

  for (const key in countOfValues) {
    switch (countOfValues[key]) {
      case 1:
        x = key;
        break;

      case 2:
        y = key;
        break;
    }
  }

  return x * x * y;  
}
