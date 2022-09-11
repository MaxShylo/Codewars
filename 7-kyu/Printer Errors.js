'use strict'

// https://www.codewars.com/kata/56541980fa08ab47a0000040

function printerError(s) {
    const errorHandleLabel = 'nopqrstuvwxyz';

    let errorCount = [...s].reduce((count, label) => {
        if (errorHandleLabel.includes(label)) {
            count++;
        }

        return count;
    }, 0)

    return `${errorCount}/${s.length}`;
}
