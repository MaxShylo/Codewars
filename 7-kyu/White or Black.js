'use strict'

// https://www.codewars.com/kata/563319974612f4fa3f0000e0

function mineColor(file, rank) {
  switch (true) {
    case rank % 2 === 0:
      return file.charCodeAt() % 2 !== 0 ? 'white' : 'black';
    case rank % 2 !== 0:
      return file.charCodeAt() % 2 !== 0 ? 'black' : 'white';
  }
}
