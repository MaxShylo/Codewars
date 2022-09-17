'use strict'

// https://www.codewars.com/kata/55c45be3b2079eccff00010f

function seachNumber(string) {
  for (const char of string) {
    if (!isNaN(+char)) {
      return char;
    }
  }
}

function order(words) {
  return words.split(' ').sort((a, b) => {
    const numFromWordA = a.split('');
    const numFromWordB = b.split('');
    let positionA = seachNumber(numFromWordA);
    let positionB = seachNumber(numFromWordB);

    return positionA - positionB;
  }).join(' ');
}
