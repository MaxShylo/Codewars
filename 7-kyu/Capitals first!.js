'use strict'

// https://www.codewars.com/kata/55c353487fe3cc80660001d4

function capitalsFirst(str) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  const filtered = str.split(' ').filter(word => {
    if (alphabet.includes(word[0].toLowerCase())) {
      return true;
    }
  })

  filtered.sort((a, b) => {
    if ((a[0].toUpperCase() === a[0]) && (b[0] === b[0].toLowerCase())) {
      return -1;
    } else if ((a[0].toUpperCase() !== a[0]) && (b[0] !== b[0].toLowerCase())) {
      return 1;
    } else {
      return 0;
    }
  })

  return filtered.join(' ');
}
