'use strict'

// https://www.codewars.com/kata/59df2f8f08c6cec835000012

function meeting(s) {
  return s.toUpperCase().split(';')
    .map(meets => meets.split(":").reverse().join(', '))
    .sort()
    .map(meets => `(${meets})`)
    .join('');
}
