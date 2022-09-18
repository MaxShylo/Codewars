'use strict'

// https://www.codewars.com/kata/56b5afb4ed1f6d5fb0000991

function revrot(str, sz) {
  if (!sz || !str.length) {
    return '';
  }

  const checkArr = str.split('');
  const chunks = [];

  while (checkArr.length >= sz) {
    chunks.push(checkArr.splice(0, sz).join(''))
  }

  return chunks.map(chunk => {
    const arrChunk = chunk.split('');
    const sumOfCubes = arrChunk.reduce((sum, x) => sum += (x ** 3), 0);

    if (sumOfCubes % 2 === 0) {
      return arrChunk.reverse().join('');
    } else {
      const fistNum = arrChunk.splice(0, 1);
      arrChunk.push(fistNum);

      return arrChunk.join('');
    }
  }).join('');
}

// console.log(revrot("123456987654", 6)) // --> "234561876549"
// console.log(revrot("123456987653", 6)) // --> "234561356789"
// console.log(revrot("66443875", 4)) // --> "44668753"
// console.log(revrot("66443875", 8)) // --> "64438756"
// console.log(revrot("664438769", 8)) // --> "67834466"
// console.log(revrot("123456779", 8)) // --> "23456771"
// console.log(revrot("", 8)) // --> ""
// console.log(revrot("123456779", 0)) // --> "" 
console.log(revrot("563000655734469485", 4)) // --> "0365065073456944"