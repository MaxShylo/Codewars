'use strict'

// https://www.codewars.com/kata/554ca54ffa7d91b236000023

function deleteNth(arr, n) {
    const count = {};

    const filteredArr = arr.reduce((filtered, num) => {
        if (!count[num]) {
            count[num] = 1;
        } else {
            count[num]++;
        }

        if (!(count[num] > n)) {
            filtered.push(num);
        }

        return filtered;
    }, [])

    return filteredArr;
}
