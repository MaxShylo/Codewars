'use strict';

// https://www.codewars.com/kata/57e7d21f6603f6e31f00007c/train/javascript

function add(a, b) {
  return (b) => a + b;
}

function subtract(a, b) {
  return (b) => a - b;
}

function multiply(a, b) {
  return (b) => a * b;
}

function apply(fn) {
  return fn;
}
