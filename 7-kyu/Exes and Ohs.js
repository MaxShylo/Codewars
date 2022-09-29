'use strict'

// https://www.codewars.com/kata/55908aad6620c066bc00002a

function XO(str) {
  const checkArr = [...str.toLowerCase()];
  const x = checkArr.filter(char => char === 'x').length;
  const o = checkArr.filter(char => char === 'o').length;
  
  return x === o;
}
