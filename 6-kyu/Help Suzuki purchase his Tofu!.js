'use strict'

// https://www.codewars.com/kata/help-suzuki-purchase-his-tofu/javascript

function buyTofu(cost, box) {
  const countMonCoins = box.split(' ').filter(coin => coin === 'mon').length;
  const totalValueMonCoins = countMonCoins * 1;
  const countMonmeCoins = box.split(' ').filter(coin => coin === 'monme').length;
  const totalValueMonmeCoins = countMonmeCoins * 60;
  const totalValue = totalValueMonCoins + totalValueMonmeCoins;

  let currentCountMonCoins = countMonCoins;
  let currentCountMonmeCoins = countMonmeCoins

  let minRequiredCoin = 0;

  while (cost > 0) {
    if (currentCountMonmeCoins && (cost - 60 >= 0)) {
      cost -= 60;
      minRequiredCoin++;
      currentCountMonmeCoins--;
      continue;
    }

    if (currentCountMonCoins && (cost - 1 >= 0)) {
      cost -= 1;
      minRequiredCoin++;
      currentCountMonCoins--;
      continue;
    }

    return 'leaving the market'
  }

  return [countMonCoins, countMonmeCoins, totalValue, minRequiredCoin];
}
