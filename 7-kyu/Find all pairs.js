'use strict'

// https://www.codewars.com/kata/5c55ad8c9d76d41a62b4ede3/train/javascript

function duplicates(array) {
  let count = array.reduce((prev, x) => (prev[x] = (prev[x] || 0) + 1, prev), {});

  return Object.values(count).reduce((pair, x) => pair + Math.floor(x / 2), 0);
}
