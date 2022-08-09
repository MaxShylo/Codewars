'use strict'

// https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript

function highAndLow(numbers){
  const number = numbers.split(' ');
  const highest = Math.max(...number);
  const lowest = Math.min(...number);
  
  return `${highest} ${lowest}`;
}
