'use strict'

// https://www.codewars.com/kata/57ee99a16c8df7b02d00045f

function flattenAndSort(array) {
  return array.reduce((prev, x) => [...prev, ...x], []).sort((a, b) => a - b);
}
