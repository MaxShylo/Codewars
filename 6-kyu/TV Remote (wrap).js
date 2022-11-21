'use strict'

// https://www.codewars.com/kata/5b2c2c95b6989da552000120

var tvRemote = function (words) {
  const keyboard = [
    ['a', 'b', 'c', 'd', 'e', '1', '2', '3'],
    ['f', 'g', 'h', 'i', 'j', '4', '5', '6'],
    ['k', 'l', 'm', 'n', 'o', '7', '8', '9'],
    ['p', 'q', 'r', 's', 't', '.', '@', '0'],
    ['u', 'v', 'w', 'x', 'y', 'z', '_', '/'],
    ['aA', 'SP', '', '', '', '', '', ''],
  ];

  let currentRow = 0;
  let currentPosition = 0;
  let count = 0;
  let stepInRow;
  let stepInPosition;
  let isUpperCase = false;

  const checkIsShortestRoute = (stepRow, stepPosition) => {
    if ((stepRow > Math.ceil(keyboard.length / 2)) && stepRow !== (keyboard.length - 1)) {
      stepInRow /= 2;
    } else if (stepRow === (keyboard.length - 1)) {
      stepInRow = 1;
    }

    if (stepPosition > Math.ceil((keyboard[0].length - 1) / 2)) {
      stepInPosition = (keyboard[0].length - 1) - stepInPosition + 1;
    }
  }

  const handleUpperCaseAndSpace = (type) => {
    const spacialCharRow = 5;
    const upperCasePosition = 0;
    const spacePosition = 1;

    stepInRow = Math.abs(currentRow - spacialCharRow);
    stepInPosition = Math.abs(currentPosition - ((type === 'upperCase') ? upperCasePosition : spacePosition));

    checkIsShortestRoute(stepInRow, stepInPosition);

    count += stepInRow + (stepInPosition + 1);
    currentRow = spacialCharRow;
    currentPosition = ((type === 'upperCase') ? 0 : spacePosition);
  }

  for (const char of words) {
    if (char === char.toLowerCase() && /^[a-zA-Z]+$/.test(char) && isUpperCase) {
      isUpperCase = false;
      handleUpperCaseAndSpace('upperCase');
    }

    if (char === char.toUpperCase() && /^[a-zA-Z]+$/.test(char) && !isUpperCase) {
      isUpperCase = true;
      handleUpperCaseAndSpace('upperCase');
    }

    if (char === ' ') {
      handleUpperCaseAndSpace('space');
      continue;
    }

    let findRow = keyboard.findIndex(row => row.includes(char.toLowerCase()));
    let findPosition = keyboard[findRow].findIndex(findChar => findChar === char.toLowerCase());

    stepInRow = Math.abs(currentRow - findRow);
    stepInPosition = Math.abs(currentPosition - findPosition);

    checkIsShortestRoute(stepInRow, stepInPosition);

    count += stepInRow + (stepInPosition + 1);

    currentRow = findRow;
    currentPosition = findPosition;
  }

  return count;
}
