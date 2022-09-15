'use strict'

// https://www.codewars.com/kata/5412509bd436bd33920011bc

function maskify(cc) {
  const lastFourChar = cc.slice(-4);
  
  return lastFourChar.padStart(cc.length, '#');
}
