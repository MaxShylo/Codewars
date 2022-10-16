'use strict'

// https://www.codewars.com/kata/59245b3c794d54b06600002a/train/javascript

function trotter(n) {
  const digit = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  let currentNum;


  for (let i = 1; i <= 1000; i++) {
    currentNum = n * i;
    const checkNum = currentNum.toString().split('');

    checkNum.forEach(num => {
      if (digit.includes(+num)) {
        digit.splice(digit.indexOf(+num), 1);
      }
    });

    if (!digit.length) {
      return currentNum;
    }
  }

  return 'INSOMNIA';
}
