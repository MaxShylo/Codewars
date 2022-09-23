'use strict'

// https://www.codewars.com/kata/51fc3beb41ecc97ee20000c3

function makeLooper(str) {
  let invocations = -1;

  return () => {
    invocations++;

    if (invocations === str.length) {
      invocations = 0;
    }

    return str[invocations];
  }
}
