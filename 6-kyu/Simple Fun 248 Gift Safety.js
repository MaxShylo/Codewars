'use strict'

// https://www.codewars.com/kata/simple-fun-number-248-gift-safety

function giftSafety(gift) {
  let result = 0;

  if (gift.length < 3) {
    return result;
  }

  for (let i = 0; i <= gift.length - 3; i++) {
    const checkStr = gift.slice(i, i + 3).split('');

    checkStr.reduce((count, letter) => {
      if (!count[letter]) {
        count[letter] = 0;
      }

      count[letter]++;

      if (count[letter] === 2) {
        result++;
      }

      return count;
    }, {});
  }

  return result;
}
