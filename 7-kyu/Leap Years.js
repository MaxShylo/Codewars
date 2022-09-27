'use strict'

// https://www.codewars.com/kata/leap-years/javascript

function isLeapYear(year) {
  return (year % 100 !== 0 && year % 4 === 0) || year % 400 === 0;
}
