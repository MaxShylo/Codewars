'use strict'

// 

Array.range = function (start, count) {
  const arr = [];

  while (count > 0) {
    arr.push(start++);
    count--;
  }

  return arr;
};

Array.prototype.sum = function () {
  return this.reduce((sum, x) => sum + x, 0);
};
