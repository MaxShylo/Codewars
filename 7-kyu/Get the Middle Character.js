'use strict'

// https://www.codewars.com/kata/56747fd5cb988479af000028

function getMiddle(s)
{
const middle = s.length / 2;

  return (s.length % 2 === 0)
    ? s.substr(middle - 1, 2)
    : s.substr(Math.floor(middle), 1);
}
