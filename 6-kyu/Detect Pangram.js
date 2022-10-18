'use strict'

// https://www.codewars.com/kata/detect-pangram/

function isPangram(string) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const checkString = string.toLowerCase();

  return alphabet.split("").every(letter => checkString.indexOf(letter) !== -1);
}
