'use strict'

// https://www.codewars.com/kata/564e21ba7cd824845b000097

function knightVsBishop(knightPosition, bishopPosition) {
  const board = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

  if ((bishopPosition[0] === knightPosition[0] + 2) || (bishopPosition[0] === knightPosition[0] - 2)) {
    if ((board.indexOf(bishopPosition[1]) === board.indexOf(knightPosition[1]) - 1)
      || (board.indexOf(bishopPosition[1]) === board.indexOf(knightPosition[1]) + 1)) {
      return 'Knight';
    }
  } else if ((bishopPosition[0] === knightPosition[0] + 1) || (bishopPosition[0] === knightPosition[0] - 1)) {
    if ((board.indexOf(bishopPosition[1]) === board.indexOf(knightPosition[1]) - 2)
      || (board.indexOf(bishopPosition[1]) === board.indexOf(knightPosition[1]) + 2)) {
      return 'Knight';
    }
  }

  const rage = bishopPosition[0] - knightPosition[0];

  if ((board.indexOf(knightPosition[1]) === board.indexOf(bishopPosition[1]) + rage)
    || (board.indexOf(knightPosition[1]) === board.indexOf(bishopPosition[1]) - rage)) {
    return 'Bishop';
  }

  return 'None';
}
