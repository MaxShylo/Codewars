'use strict'

// https://www.codewars.com/kata/585d7d5adb20cf33cb000235

function findUniq(arr) {
  const isUnique = arr.filter(num => num !== arr[0]).length > 1;

  return isUnique ? arr[0] : arr.find(num => num !== arr[0]); 
}
