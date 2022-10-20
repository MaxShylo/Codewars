'use strict'

// https://www.codewars.com/kata/scramblies/javascript

function scramble(str1, str2) {
  const availableLetters = str1.split('').reduce((count, letter) => (count[letter] = (count[letter] || 0) + 1, count), {});

  for (const letter of str2) {
    if (!availableLetters[letter]) {
      return false;
    } 

    availableLetters[letter]--;
  }

  return true;
}
