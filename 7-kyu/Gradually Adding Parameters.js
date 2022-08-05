'use strict'

// https://www.codewars.com/kata/555b73a81a6285b6ce000047/train/javascript

function add(...arg) {
  return arg.reduce((sum, x, i) => sum + x * (i + 1), 0);
}
