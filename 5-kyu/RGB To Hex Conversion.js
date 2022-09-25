'use strict'

// https://www.codewars.com/kata/513e08acc600c94f01000001

function rgb(r, g, b) {
  const hex = [...arguments].reduce((hex, value) => {
    if (value > 255) {
      return hex += 'ff';
    }

    if (value <= 0) {
      return hex += '00';
    }

    const toHex = value.toString(16);

    if (toHex.length === 1) {
      return hex += `0${toHex}`;
    }

    return hex += value.toString(16);
  }, '');

  return hex.toUpperCase();
}
