'use strict'

// https://www.codewars.com/kata/529e2e1f16cb0fcccb000a6b

var splitInteger = function (num, parts) {
  let resultArr = new Array(parts);

  if (num % parts === 0) {
    return resultArr.fill((num / parts));
  } else {
    const divider = Math.floor(num / parts);

    resultArr.fill(divider);
    let sum = resultArr.reduce((sum, x) => sum += x, 0);
    let current = resultArr.length - 1;

    while (sum !== num) {
      const replaced = resultArr[current] + 1;
      resultArr.splice(current, 1, replaced);
      current--;
      sum = resultArr.reduce((sum, x) => sum += x, 0);
    }

    return resultArr;
  }
}
