'use strict'

// https://www.codewars.com/kata/54da539698b8a2ad76000228\

function isValidWalk(walk) {
  if (walk.length !== 10) {
    return false;
  }

  let x = 0;
  let y = 0;

  for (const direction of walk) {
    switch (direction) {
      case 'n':
        y++;
        break;
      case 's':
        y--;
        break;
      case 'w':
        x--;
        break;
      case 'e':
        x++;
        break;
    }
  }

  return (x === 0 && y === 0);
}



// ver.2.0

// function isValidWalk(walk) {

//   if (walk.length !== 10) {
//     return false;
//   }

//   const oppositeDirection = {
//     n: 's',
//     s: 'n',
//     w: 'e',
//     e: 'w',
//   }

//   const count = walk.reduce((prev, direction) => (prev[direction] = (prev[direction] || 0) + 1, prev), {});

//   for (const direction in count) {
//     if (count[direction] !== count[oppositeDirection[direction]]) {
//       return false;
//     }
//   }

//   return true;
// }
