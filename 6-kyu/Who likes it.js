'use strict'

// https://www.codewars.com/kata/5266876b8f4bf2da9b000362

function likes(names) {
  switch (names.length) {
    case 0:
      return 'no one likes this';
      break;
    case 1:
      return `${names[0]} likes this`;
      break;
    case 2:
      return `${names[0]} and ${names[1]} likes this`;
      break;
    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} likes this`;
      break;
    default:
      return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
}
