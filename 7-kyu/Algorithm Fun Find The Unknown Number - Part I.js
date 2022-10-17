'use strict'

// https://www.codewars.com/kata/59cdb2b3a25c8c6d56000005

function findUnknowNumber(x, y, z) {
  for (let i = 1; i < Infinity; i++) {
    if (i % 3 === x && i % 5 === y && i % 7 === z) {
      return i;
    }
  }
}
