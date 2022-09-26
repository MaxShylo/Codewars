'use strict'

// https://www.codewars.com/kata/552564a82142d701f5001228

function discoverOriginalPrice(discountedPrice, salePercentage){
  return +(100 * discountedPrice / (100 - salePercentage)).toFixed(2);
}
