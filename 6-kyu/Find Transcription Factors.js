'use strict'

// https://www.codewars.com/kata/5781265ee6e3d06fd30000fe

function transFactors(seq) {
  const parameters = {
    ATF6: 'TGACGT',
    CREB: 'TGACGCA',
    cMyc: 'CACGTG',
    Gata1: 'GATT',
    AhR: 'TGCGTG',
  }

  const result = {};

  for (const dna in parameters) {
    let startPosition = seq.indexOf(parameters[dna]);

    while (startPosition !== -1) {
      if (!result[dna]) {
        result[dna] = [];
      }

      result[dna].push(startPosition + 1);
      startPosition = seq.indexOf(parameters[dna], startPosition + 1);
    }
  }

  return result;
}
