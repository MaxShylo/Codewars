'use strict'

// 

function findUniq(arr) {
  const isUnique = arr.filter(num => num !== arr[0]).length > 1;

  return isUnique ? arr[0] : arr.find(num => num !== arr[0]); 
}
