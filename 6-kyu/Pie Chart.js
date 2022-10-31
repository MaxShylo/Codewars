'use strict'

// https://www.codewars.com/kata/59006675bb1fb31ae400012b

function pieChart(obj){
  const checkObj = JSON.parse(obj)
  const sumOfChar = Object.values(checkObj).reduce((sum, x) => sum + x, 0);
  const result = {};

  for (const key in checkObj) {
    result[key] = +(checkObj[key] * 360 / sumOfChar).toFixed(2);
  }

  return JSON.stringify(result);
}
