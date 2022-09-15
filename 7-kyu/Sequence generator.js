'use strict'

// https://www.codewars.com/kata/56ba8a9b022c16017d0001f3

function sequence(n, pattern) {
  const newArr = [];

  if (typeof pattern === 'function') {
    for (let i = 0; i < n; i++) {
      newArr.push(pattern(n, i));
    }
  } else {
    newArr.length = n;
    newArr.fill(pattern);
  }

  return newArr;
}
