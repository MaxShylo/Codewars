'use strict'

// https://www.codewars.com/kata/54ca3e777120b56cb6000710

function chained(functions) {
  return (x) => functions.reduce((prev, f) => f(prev), x);
}
