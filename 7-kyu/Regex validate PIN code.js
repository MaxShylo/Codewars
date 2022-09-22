'use strict'

// https://www.codewars.com/kata/55f8a9c06c018a0d6e000132

function validatePIN(pin) {
  const properLength = [4, 6];
  const digits = '0123456789';

  if (!properLength.includes(pin.length)) {
    return false;
  }

  for (const char of pin) {
    if (!digits.includes(char)) {

      return false;
    }
  }

  return true;
}
