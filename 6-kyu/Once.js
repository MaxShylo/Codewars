'use strict'

// https://www.codewars.com/kata/5307ff5b588fe6d7000000a5

function once(fn) {
    let isCalled = false;

    return (...arg) => {
        if (isCalled) {
            return;
        }

        isCalled = true;
        return fn(...arg);
    };
}
