'use strict'

// https://www.codewars.com/kata/56f3a1e899b386da78000732

function partlist(arr) {
  const result = [];

  for (let i = 0; i < arr.length - 1; i++) {
    const firstPart = arr.slice(0, i + 1).join(' ');
    const secondPart = arr.slice(i + 1).join(' ');

    result.push([firstPart, secondPart]);
  }

  return result;
}
