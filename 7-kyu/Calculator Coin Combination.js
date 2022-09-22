'use strict'

// https://www.codewars.com/kata/564d0490e96393fc5c000029

function coinCombo(cents) {
  const countCoins = {
    coin1: 0,
    coin5: 0,
    coin10: 0,
    coin25: 0,
  }

  let currentValue = cents;

  while (currentValue !== 0) {
    if ((currentValue - 25) >= 0) {
      currentValue -= 25;
      countCoins.coin25++;

      continue;
    }

    if ((currentValue - 10) >= 0) {
      currentValue -= 10;
      countCoins.coin10++;

      continue;
    }

    if ((currentValue - 5) >= 0) {
      currentValue -= 5;
      countCoins.coin5++;

      continue;
    }

    if ((currentValue - 1) >= 0) {
      currentValue -= 1;
      countCoins.coin1++;

      continue;
    }

  }

  return Object.values(countCoins);
}
