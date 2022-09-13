'use strict'

// https://www.codewars.com/kata/5656b6906de340bd1b0000ac

function longest(s1, s2) {
    const count = {};

    return [...(s1 + s2)].filter(letter => {
        count[letter] = (count[letter] || 0) + 1;

        return count[letter] <= 1;
    })
        .sort()
        .join('');
}
