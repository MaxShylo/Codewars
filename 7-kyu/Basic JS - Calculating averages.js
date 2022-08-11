'use strict'

// https://www.codewars.com/kata/529f32794a6db5d32a00071f/train/javascript

var Calculator = {
  average: function (...args) {
    return args.length === 0
      ? 0
      : args.reduce((sum, x) => sum + x) / args.length;
  }
};
