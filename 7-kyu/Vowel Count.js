'use strict'

// https://www.codewars.com/kata/54ff3102c1bad923760001f3

function getCount(str) {
  const vowel = 'aeiou';
  let count = 0;
  
  for (const letter of str) {
    if (vowel.includes(letter)) {
      count++;
    }
  }
  
  return count;
}