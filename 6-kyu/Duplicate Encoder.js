'use strict'

// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript

function duplicateEncode(word){
  return word
    .toLowerCase()
    .split('')
    .map((letter, i, w) => w.indexOf(letter) === w.lastIndexOf(letter) ? '(' : ')')
    .join('');
}

console.log(duplicateEncode("recede")); // "()()()"