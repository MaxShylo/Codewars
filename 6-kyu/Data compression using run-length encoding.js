'use strict'

// https://www.codewars.com/kata/578bf2d8daa01a4ee8000046

function encode(input) {
  const encodeCount = {};
  const encodeResult = [];

  [...input].forEach((letter, i, arr) => {
    if (!encodeCount[letter]) {
      encodeCount[letter] = 1;
    } else {
      encodeCount[letter]++;
    }

    if (letter !== arr[i + 1]) {
      const encoded = `${encodeCount[letter]}${letter}`;
      delete encodeCount[letter];

      encodeResult.push(encoded);
    }
  })

  return encodeResult.join('');
}

function decode(input) {
  let splitedArr = '';
  let decodedResult = '';
  const numbers = '0123456789';

  [...input].forEach((char, i, arr) => {
    if (!numbers.includes(char)) {
      splitedArr += ` ${char}`;

      if (arr[i + 1]) {
        splitedArr += '-';
      }
    } else {
      splitedArr += char;
    }
  })

  splitedArr.split('-').map(entries => {
    const decoded = entries.split(' ');
    
    decodedResult += decoded[1].repeat(decoded[0]);
  });

  return decodedResult;
}
