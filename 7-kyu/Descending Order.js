'use strict'

// https://www.codewars.com/kata/5467e4d82edf8bbf40000155

function descendingOrder(n){
  return +(n.toString().split('').sort((a, b) => b - a).join(''));
}
