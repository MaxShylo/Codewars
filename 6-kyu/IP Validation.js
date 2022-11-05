'use strict'

// https://www.codewars.com/kata/ip-validation/javascript

function isValidIP(str) {
  const checkStr = str.split('.');

  if (checkStr.length !== 4) {
    return false;
  }

  if (checkStr.some(num => !(/^\d+$/.test(num)))) {
    return false;
  }

  return !checkStr.some(num => (num < 0) || (num > 255) || (num.length > 1 && num.startsWith('0')));
}
