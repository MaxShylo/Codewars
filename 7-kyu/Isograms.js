'use strict'

// https://www.codewars.com/kata/54ba84be607a92aa900000f1

function isIsogram(str) {
  if (!str.length) {
    return true;
  }

  const count = [...str].reduce((count, letter) => (count[letter.toLowerCase()] = (count[letter.toLowerCase()] || 0) + 1, count), {})

  return Math.max(...Object.values(count)) === 1;
}
