'use strict'

// https://www.codewars.com/kata/5901555b63bf404a66000029

function lightBulbs(lights, n) {
  let currentState = lights;

  while (n--) {
    currentState = currentState.map((state, i, arr) => {
      if ((i === 0 && arr[arr.length - 1] === 1) || (arr[i - 1] === 1)) {
        return state === 1 ? 0 : 1;
      }

      return state;
    })
  }

  return currentState;
}
