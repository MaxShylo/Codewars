'use strict'

// https://www.codewars.com/kata/5c3433a4d828182e420f4197/train/javascript

const ultimateReverse = s => {
  let reversed = [...s.join('')].reverse();

  return s.map(word => reversed.splice(0, word.length).join(''));
};
