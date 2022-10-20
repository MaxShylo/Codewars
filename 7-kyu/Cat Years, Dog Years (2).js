'use strict'

// https://www.codewars.com/kata/5a6d3bd238f80014a2000187

var ownedCatAndDog = function (catYears, dogYears) {
  let ownedCat = countYear(catYears, 'c');
  let ownedDog = countYear(dogYears, 'd');

  return [ownedCat, ownedDog];
}

const countYear = (years, animal) => {
  let eachYears = animal === 'c' ? 4 : 5;
  let quantityYears = 0;

  for (let i = 1; years > 0; i++) {
    if (i === 1) {
      years -= 15;
    }

    if (i === 2) {
      years -= 9;
    }

    if (i > 2) {
      years -= eachYears;
    }

    if (years >= 0) {
      quantityYears++;
    }
  }

  return quantityYears;
}
