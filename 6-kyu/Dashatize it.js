'use strict'

// https://www.codewars.com/kata/dashatize-it/javascript

function dashatize(num) {
    if (isNaN(num)) {
        return NaN;
    }

    if (num < 0) {
        num = -num;
    }

    const checkNum = num.toString();

    if (checkNum === 1) {
        return +checkNum;
    }

    const dashed = checkNum.split('').join('-').split('').filter((num, i, arr) => {
        if ((num === '-') && (+arr[i - 1] % 2 === 1)) {
            return true;
        }

        if ((num === '-') && (+arr[i + 1] % 2 === 0)) {
            return false;
        }

        return true;
    });


    return dashed.join('');
}
