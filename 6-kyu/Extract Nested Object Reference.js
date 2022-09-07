'use strict'

// https://www.codewars.com/kata/527a6e602a7db3456e000a2b

Object.prototype.hash = function (string) {
  let current = this;
  const propertie = string.split('.');

  for (const path of propertie) {
    if (!current[path]) {
      return undefined;
    }
    current = current[path];
  }

  return current;
}
