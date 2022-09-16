'use strict'

// https://www.codewars.com/kata/59901fb5917839fe41000029

function numericFormatter(template, number = '1234567890') {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let current = 0;
  let formated = '';

  for (let f = 0; f < template.length; f++) {
    if (template[f] === ' ') {
      formated += ' ';
      continue;
    }

    if (alphabet.includes(template[f].toLowerCase())) {
      formated += number[current];
      current++;

      if (current === number.length) {
        current = 0;
      }
    } else {
      formated += template[f];
    }
  }

  return formated;
}

console.log(numericFormatter("xxx xxxxx xx", "5465253289")) // "546 52532 89"
console.log(numericFormatter("xxx xxxxx xx")) // "123 45678 90"
console.log(numericFormatter("+555 aaaa bbbb", "18031978")) // "+555 1803 1978"
console.log(numericFormatter("+555 aaaa bbbb")) // "+555 1234 5678"
console.log(numericFormatter("xxxx yyyy zzzz")) // "1234 5678 9012"