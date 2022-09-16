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
