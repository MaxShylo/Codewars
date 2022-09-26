'use strict'

// https://www.codewars.com/kata/5839edaa6754d6fec10000a2

function findMissingLetter(array) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';

  if (array[0].toUpperCase() === array[0]) {
    alphabet = alphabet.toUpperCase();
  }

  const substring = [...alphabet.slice(alphabet.indexOf(array[0]), alphabet.indexOf(array[array.length - 1]) + 1)];

  return substring.find(letter => !array.includes(letter));
}
