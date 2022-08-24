'use strict'

// https://www.codewars.com/kata/56eb0be52caf798c630013c0

function unluckyDays(year) {
  const date = new Date(year, 0, 1);
  const fridays = [];

  while (date.getFullYear() === year) {
    if (date.getDay() === 5) {
      fridays.push(date.getDate())
    }
  
    date.setDate(date.getDate() + 1);
  }

  return fridays.filter(date => date === 13).length;
}
