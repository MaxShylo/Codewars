'use strict'

// https://www.codewars.com/kata/5421c6a2dda52688f6000af8

function compose(f, g) {
  return (...args) => f(g(...args));
}
