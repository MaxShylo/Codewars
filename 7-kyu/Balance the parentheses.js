'use strict'

// https://www.codewars.com/kata/5d8365b570a6f6001519ecc8

function fixParentheses(str) {
  const openBraket = [];
  let neededOpenBraket = '';

  for (const braket of str) {
    switch (braket) {
      case '(':
        openBraket.push(braket);
        break;

      case ')':
        if (!openBraket.length) {
            neededOpenBraket += '(';
            continue;
        }

        openBraket.pop();
        break;
    }
  }

  return `${neededOpenBraket + str}${openBraket.map(braket => ')').join('')}`;
}
