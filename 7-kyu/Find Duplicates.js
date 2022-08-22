'use strict'

// https://www.codewars.com/kata/find-duplicates

function duplicates(arr) {
  const result = [];
  const possibleDuplicates = [];

  for (const element of arr) {
    if (!possibleDuplicates.includes(element)) {
      possibleDuplicates.push(element);
    } else if (!result.includes(element)) {
      result.push(element);
    }
  }

  return result;
}
