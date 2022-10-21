'use strict'

// https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39

function calculation(operation, num) {
  return operation ? operation(num) : num;
}

function zero(operation) {
  return calculation(operation, 0);
}

function one(operation) {
  return calculation(operation, 1);
}

function two(operation) {
  return calculation(operation, 2);
}

function three(operation) {
  return calculation(operation, 3);
}

function four(operation) {
  return calculation(operation, 4);
}

function five(operation) {
  return calculation(operation, 5);
}
function six(operation) {
  return calculation(operation, 6);
}

function seven(operation) {
  return calculation(operation, 7);
}

function eight(operation) {
  return calculation(operation, 8);
}

function nine(operation) {
  return calculation(operation, 9);
}

function plus(adder) {
  return (num) => num + adder;
}

function minus(subtractor) {
  return (num) => num - subtractor;
}

function times(multiplier) {
  return (num) => num * multiplier;
}

function dividedBy(divider) {
  return (num) => Math.floor(num / divider);
}
