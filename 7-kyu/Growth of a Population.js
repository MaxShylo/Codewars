'use strict'

// https://www.codewars.com/kata/563b662a59afc2b5120000c6/train/javascript

function nbYear(p0, percent, aug, p) {
  let currentPopulation = p0;
  let years = 0;

  while (currentPopulation < p) {
    currentPopulation += Math.floor(currentPopulation * percent / 100 + aug);
    years++;
  }

  return years;
}
