'use strict'

// https://www.codewars.com/kata/help-suzuki-rake-his-garden/javascript

function rakeGarden(garden) {
  return garden.split(' ').map(item => {
    if (item !== 'rock' && item !== 'gravel') {
      return 'gravel';
    }

    return item;
  }).join(' ');
}

var garden1 = 'slug spider rock gravel gravel gravel gravel gravel gravel gravel';

console.log(rakeGarden(garden1));