'use strict'

// https://www.codewars.com/kata/55b86beb1417eab500000051

function gap(num) {
  let binary = num.toString(2);

  if (!binary.endsWith('1')) {
    binary = binary.slice(0, binary.lastIndexOf('1') + 1);
  }

  return Math.max(...binary.split('1').map(gap => gap.length));
}
