'use strict'

// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript

function duplicateCount(text) {
  return text.toLowerCase().split('').filter((char, i, arr) => {
    return arr.indexOf(char) !== i && arr.lastIndexOf(char) === i;
  }).length;
}
