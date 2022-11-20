'use strict'

// https://www.codewars.com/kata/5a5032f4fd56cb958e00007a

var tvRemote = function(word) {
  const keyboard = [
    ['a', 'b', 'c', 'd', 'e', '1', '2', '3'],
    ['f', 'g', 'h', 'i', 'j', '4', '5', '6'],
    ['k', 'l', 'm', 'n', 'o', '7', '8', '9'],
    ['p', 'q', 'r', 's', 't', '.', '@', '0'],
    ['u', 'v', 'w', 'x', 'y', 'z', '_', '/'],
  ];

  let currentRow = 0;
  let currentPosition = 0;
  let count = 0;

  for (const char of word) {
    const findRow = keyboard.findIndex(row => row.includes(char));
    const findPosition = keyboard[findRow].findIndex(findChar => findChar === char);

    let stepInRow = Math.abs(currentRow - findRow);
    let stepInPosition = Math.abs(currentPosition - findPosition);

    count += stepInRow + (stepInPosition + 1);

    currentRow = findRow;
    currentPosition = findPosition;
  }

  return count;
}

// c => a-b-c-OK = 3
// o => c-d-e-j-o-OK = 5
// d => o-j-e-d-OK = 4
// e => d-e-OK = 2
// w => e-j-o-t-y-x-w-OK = 7
// a => w-r-m-h-c-b-a-OK = 7
// r => a-f-k-p-q-r-OK = 6
// s => r-s-OK = 2
// Answer = 3 + 5 + 4 + 2 + 7 + 7 + 6 + 2 = 36



console.log(tvRemote("codewars")) // 36
console.log(tvRemote("does")) // 16
console.log(tvRemote("your")) // 23
console.log(tvRemote("solution")) // 33
console.log(tvRemote("work")) // 20
console.log(tvRemote("for")) // 12
console.log(tvRemote("these")) // 27
console.log(tvRemote("words")) // 25