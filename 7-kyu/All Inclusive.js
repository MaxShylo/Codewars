'use strict'

// https://www.codewars.com/kata/5700c9acc1555755be00027e/train/javascript

function containAllRots(strng, arr) {
  const rotations = [];
  let currentStr = strng;

  for (let i = 0; i < strng.length; i++) {
    let rotation = currentStr.slice(1) + currentStr.slice(0, 1);
    currentStr = rotation;
    rotations.push(rotation);
  }

  for (const rotation of rotations) {
    if (!arr.includes(rotation)) {
      return false;
    }
  }

  return true;
}
