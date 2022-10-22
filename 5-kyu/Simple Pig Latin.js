'use strict'

// https://www.codewars.com/kata/520b9d2ad5c005041100000f

function pigIt(str){
  return str.split(' ').map(word => {
    if (!/^[A-Za-z]*$/.test(word)) {
      return word;
    }
    
    const letters = word.split('');
    const latinWord = `${letters.slice(1).join('')}${letters.slice(0, 1).join('')}ay`;

    return latinWord;
  }).join(' ');
}
