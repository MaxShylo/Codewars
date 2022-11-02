'use strict'

// https://www.codewars.com/kata/523a86aa4230ebb5420001e1

function anagrams(word, words) {
  const count = word.split('').reduce((prev, letter) => (prev[letter] = (prev[letter] || 0) + 1, prev), {});

  return words.filter(word => {
    const isAnagram = word.split('').reduce((prev, letter) => (prev[letter] = (prev[letter] || 0) + 1, prev), {})

    for (const key in isAnagram) {
      if (isAnagram[key] !== count[key]) {
        return false;
      }
    }

    return true;
  })
}
