'use strict'

// https://www.codewars.com/kata/5c50a0e8cdc6aa29703f6805

const calculateBricksCount = (width, height) => {
  const levels = height / 5;
  let largeBricks = 0;
  let mediumBricks = 0;
  let smallBricks = 0;
  let row = 1;

  const buildRow = () => {
    let widthRow = width - 60;
    smallBricks++;
    mediumBricks++;

    while (widthRow !== 0) {
      if (widthRow - 60 >= 0) {
        widthRow -= 60;
        largeBricks++;

        continue;
      }

      if (widthRow - 40 >= 0) {
        widthRow -= 40;
        mediumBricks++;

        continue;
      }

      widthRow -= 20;
      smallBricks++;
    }

  }

  for (let i = 1; i <= levels; i++) {
    switch (row) {
      case 1:
        largeBricks += width / 60;
        row++;

        break;
      case 2:
        buildRow();
        row++;

        break;
      case 3:
        buildRow();
        row = 1;
    }
  }

  return (smallBricks === 0 && mediumBricks === 0)
    ? `${largeBricks}L`
    : `${largeBricks}L${mediumBricks}M${smallBricks}S`;
}
