'use strict'

// https://www.codewars.com/kata/5701e43f86306a615c001868/train/javascript

function getIssuer(number) {
  const cardTypes = [
    { type: "AMEX", prefix: ["34", "37"], length: [15] },
    { type: "Discover", prefix: ["6011"], length: [16] },
    { type: "Mastercard", prefix: ["51", "52", "53", "54", "55"], length: [16] },
    { type: "VISA", prefix: ["4"], length: [13, 16] },
  ];

  const strFromNum = number.toString();

  for (const card in cardTypes)
    if (cardTypes[card].prefix.some(v => { return strFromNum.startsWith(v) })
      && cardTypes[card].length.some(v => { return strFromNum.length === v })) {
      return cardTypes[card].type;
    }

  return "Unknown";
}
