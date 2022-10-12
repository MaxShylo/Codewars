'use strict'

// https://www.codewars.com/kata/5cb05eee03c3ff002153d4ef

function getSectionIdFromScroll(scrollY, sizes) {
  let currentId = 0;
  let currentPosition = sizes[0];

  for (let i = 1; i <= sizes.length; i++) {
    if (scrollY >= currentPosition) {
      currentId++;

      if (currentId === sizes.length) {
        return -1;
      }

      currentPosition += sizes[i];
    } else {
      return currentId;
    }
  }
}
