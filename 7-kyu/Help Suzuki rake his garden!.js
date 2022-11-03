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
