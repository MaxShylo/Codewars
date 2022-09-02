'use strict'

// https://www.codewars.com/kata/58885a7bf06a3d466e0000e3

function pairOfShoes(shoes) {
  const count = shoes.reduce((prev, shoe, i, arr) => {
    prev[shoe[0]].push(shoe[1]);
    prev[shoe[0]].sort((a, b) => a - b);

    return prev;
  }, { 0: [], 1: []})

  return count[0].join('') === count[1].join('');
}
