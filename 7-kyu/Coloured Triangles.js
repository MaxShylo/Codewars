'use strict'

// https://www.codewars.com/kata/5a25ac6ac5e284cfbe000111

function triangle(row) {
  const colors = ['R', 'G', 'B'];
  let currentRow = [...row];

  while (currentRow.length > 1) {
    const nextRow = currentRow.reduce((row, currentColor, i, arr) => {
      const nextColor = arr[i + 1];

      if (!nextColor) {
        return row;
      }

      if (currentColor !== nextColor) {
        const missingColor = colors.find(color => !`${currentColor + nextColor}`.includes(color));

        row.push(missingColor);
      } else {
        row.push(currentColor);
      }

      return row;
    }, []);

    currentRow = nextRow;
  }

  return currentRow.join('');
}
