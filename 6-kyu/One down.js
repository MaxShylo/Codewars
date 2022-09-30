'use strict'

// https://www.codewars.com/kata/56419475931903e9d1000087

function oneDown(str) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

  if (typeof str !== 'string') {
    return 'Input is not a string';
  }

  const arr = str.split(' ');
  const checkArr = arr.map(word => {
    const checkWord = word.split('');

    return checkWord.map(letter => {
      if (letter === 'A') {
        return 'z';
      }

      if (alphabet.includes(letter)) {
        return alphabet[alphabet.indexOf(letter) - 1];
      }
     
      return letter;
    }).join('');
  })

  return checkArr.join(' ');
}
