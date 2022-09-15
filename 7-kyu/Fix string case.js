'use strict'

// https://www.codewars.com/kata/5b180e9fedaa564a7000009a

function solve(s){
  let countOfUppercase = 0;
  let countOfLowercase = 0;

  for (const letter of s) {
    if (letter.toUpperCase() === letter) {
      countOfUppercase++;
    } else {
      countOfLowercase++;
    }
  }

  return countOfLowercase >= countOfUppercase
    ? s.toLowerCase()
    : s.toUpperCase();
}
