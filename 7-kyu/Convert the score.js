'use strict'

// https://www.codewars.com/kata/convert-the-score/javascript

function scoreboard(string) {
  const rage = {
    nil: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  }

  const score = [];

  [...string.split(' ')].forEach(word => {
    if (rage[word] !== undefined) {
      score.push(rage[word]);
    }
  })

  return score;
}
