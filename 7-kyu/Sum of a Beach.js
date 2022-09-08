'use strict'

// https://www.codewars.com/kata/5b37a50642b27ebf2e000010

function sumOfABeach(beach) {
    const parts = ['sand', 'water', 'fish', 'sun'];
    let count = 0;

    parts.forEach(part => count += beach.toLowerCase().split(part).length - 1);

    return count;
}
