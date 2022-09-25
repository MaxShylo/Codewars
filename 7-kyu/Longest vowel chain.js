'use strict'

// https://www.codewars.com/kata/longest-vowel-chain/javascript

function solve(s) {
  const vowels = 'aeiou';
  let countVowel = 0;

  const vowelsSubStrings = [...s].reduce((chain, letter, i, arr) => {
    if (vowels.includes(letter)) {
      countVowel++;
      if (i === arr.length - 1) {
        chain.push(countVowel);
      }
    } else if (countVowel) {
      chain.push(countVowel);
      countVowel = 0;
    }

    return chain;
  }, []);

  return Math.max(...vowelsSubStrings);
}
