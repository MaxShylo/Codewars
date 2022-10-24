'use strict'

// https://www.codewars.com/kata/josephus-permutation/javascript

function josephus(items, k) {
  const result = [];
  let currentStep = 1;

  for (let i = 0; i < items.length; i++) {
    if (currentStep === k) {
      result.push(...items.splice(i, 1));
      i--;
      currentStep = 1;

      if (i + 1 === items.length) {
        i = -1;
      }

      continue;
    }

    if (i + 1 === items.length) {
      i = -1;
    }

    currentStep++;
  }

  return result;
}
