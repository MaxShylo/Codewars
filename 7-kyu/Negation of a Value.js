'use strict'

// https://www.codewars.com/kata/58f6f87a55d759439b000073

function negationValue(string, value) {
  let currentValue = value;

  for (let i = 0; i < string.length; i++) {
    currentValue = !currentValue;
  }

  return currentValue;
}
