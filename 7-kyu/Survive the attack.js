'use strict'

// https://www.codewars.com/kata/634d0f7c562caa0016debac5

function hasSurvived(attackers, defenders) {
  let survivesAttackers = 0;
  let survivesDefenders = 0;
  const powerAttack = attackers.reduce((sum, x) => sum + x, 0);
  const powerDefende = defenders.reduce((sum, x) => sum + x, 0);

  const bigger = attackers.length >= defenders.length ? attackers.length : defenders.length;

  for (let i = 0; i < bigger; i++) {
    const currentAttacker = attackers[i] ? attackers[i] : 0;
    const currentDefender = defenders[i] ? defenders[i] : 0;
    
    if (currentAttacker - currentDefender > 0) {
      survivesAttackers++;
    } else if (currentDefender - currentAttacker > 0){
      survivesDefenders++;
    } else {
      continue;
    }
  }

  if (survivesAttackers === survivesDefenders) {
    if (powerAttack === powerDefende) {
      return true;
    } else if (powerDefende > powerAttack) {
      return true;
    } else {
      return false;
    }
  } 

  return survivesDefenders > survivesAttackers;
}
