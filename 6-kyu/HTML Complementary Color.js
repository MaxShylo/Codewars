'use strict'

// https://www.codewars.com/kata/56be4affc5dc03b84b001d2d

function getReversedColor(hexColor) {
  const isValid = !hexColor.includes('#')
    && typeof hexColor === 'string'
    && !/[G-Zg-z]/.test(hexColor);

  if (!isValid) {
    throw new Error('Invalid input data!!!');
  }

  if (hexColor.length > 6) {
    throw new Error('Incorrect hex-string length!!!');
  }

  if (hexColor.length < 6) {
    hexColor = hexColor.padStart(6, '0');
  }

  const hexNumber = parseInt(hexColor, 16);
  const complementaryNumber = parseInt('FFFFFF', 16) - hexNumber;

  return `#${complementaryNumber.toString(16).toUpperCase()}`;
}
