'use strict'

// https://www.codewars.com/kata/56948e24b510d4e1d3000022/train/javascript

function adviseBefore(target, advice) {
  return (...args) => {
    const resultOfAdvice = advice(...args);
    
    if (Array.isArray(resultOfAdvice)) {
      return target(...resultOfAdvice);
    }

    return target(...args);
  };
}
