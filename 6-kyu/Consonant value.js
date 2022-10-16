'use strict'

// https://www.codewars.com/kata/59c633e7dcc4053512000073

function solve(s) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const exception = "aeiou";
  let subStr = '';

  let check = s.split('').reduce((substrings, letter, i, arr) => {
    if (!exception.includes(letter)) {
      subStr += letter;

      if (exception.includes(arr[i + 1]) || !arr[i + 1]) {
        substrings.push(subStr);
        subStr = '';
      }
    }

    return substrings;
  }, []);

  const values = check.map(sub => {
    return sub.split('').reduce((value, letter) => {
      return value + (alphabet.indexOf(letter) + 1);
    }, 0)
  })

  return Math.max(...values);
};
