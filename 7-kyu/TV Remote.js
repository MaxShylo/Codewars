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
