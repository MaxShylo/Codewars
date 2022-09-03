'use strict'

// https://www.codewars.com/kata/55f8370b0229d3dad000007a

function count(addresses) {
  const states = addresses.reduce(function (states, { state }) {
    if (!state) {
      throw new Error('State not provided!!!');
    }

    if (!states[state]) {
      states[state] = 0;
    }

    return states[state]++, states;
  }, {})

  return Object.keys(states).map(state => ({ state, count: states[state] }))
}
