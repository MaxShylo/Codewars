'use strict'

// https://www.codewars.com/kata/579387dc7cb7a1e592000112/train/javascript

function pidgeyCalc(pidgeys, candy) {
  let xp = 0;

  while (pidgeys > 0) {
    if ((candy - 12) >= 0) {
      xp += 500;
      candy -= 11;
      pidgeys--;
    } else {
      pidgeys--;
      candy++;
    }
  }

  return xp;
}
