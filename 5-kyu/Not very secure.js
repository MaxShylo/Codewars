'use strict'

// https://www.codewars.com/kata/not-very-secure/javascript

function alphanumeric(string){
  if (!string.length) {
    return false;
  }

  return /^[A-Za-z0-9]*$/.test(string);
}
