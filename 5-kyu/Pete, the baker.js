'use strict'

// https://www.codewars.com/kata/pete-the-baker/javascript

function cakes(recipe, available) {
  return Math.min(...Object.keys(recipe).map(product => Math.floor(available[product] / recipe[product] || 0)));
}
