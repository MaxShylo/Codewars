'use strict'

// https://www.codewars.com/kata/57ed6361e77282ee9300019f

function fifa(ticket, results){
  const isWinBet = results.map((score, i) => {
     const check = score.split('-');
      switch(i) {
        case 0:
          return check[0] > check[1];

        case 1:
          return check[0] < check[1];

        case 2:
          return check[0] === check[1];
      }
  });

  const bets = Object.values(ticket).map(bet => +(bet.split('£').join('')));

  const wins = bets.reduce((wins, bet, i) => {
    if (isWinBet[i]) {
      return wins + bet;
    }

    return wins;
  }, 0);

  return `£${wins}`;
}
