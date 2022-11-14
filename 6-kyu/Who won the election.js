'use strict'

// https://www.codewars.com/kata/554910d77a3582bbe300009c/javascript

function getWinner(listOfBallots) {
  const count = listOfBallots.reduce((vote, name) => (vote[name] = (vote[name] || 0) + 1, vote), {});
  const isWon = listOfBallots.length / 2;

  const winner = Object.keys(count).find(name => count[name] > isWon);

  return winner || null;
}
