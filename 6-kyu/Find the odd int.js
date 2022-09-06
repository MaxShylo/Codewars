'use strict'

// https://www.codewars.com/kata/54da5a58ea159efa38000836

function findOdd(A) {
  const count = A.reduce((prev, x) => (!prev[x] ? prev[x] = 1 : prev[x]++, prev), {});

  for (const num in count) {
    if (count[num] % 2 === 1) {
      return +num;
    }
  }
}
