'use strict'

// https://www.codewars.com/kata/551e467e24b7a4e0b20001e8

class Point {
    constructor() {
        throw Error();
    }

    static create(x, y) {
        let newObj = Object.create(Point.prototype);
        newObj.x = x;
        newObj.y = y;
        return newObj;
    }
}
