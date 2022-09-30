'use strict'

// https://www.codewars.com/kata/520d9c27e9940532eb00018e

function solution(...args) {
  return !!args.find((arg, i, arr) => {
    const checkArr = arr.slice(i + 1);

    return checkArr.includes(arg);
  })
}
