'use strict'

// https://www.codewars.com/kata/new-cashier-does-not-know-about-space-or-shift/javascript

function getOrder(input) {
  const menu = ['Burger', 'Fries', 'Chicken', 'Pizza', 'Sandwich', 'Onionrings', 'Milkshake', 'Coke'];
  const correctOrger = [];

  for (const item of menu) {
    for (let i = 0; i < input.length; i++) {
      if (input.startsWith(item.toLowerCase(), i)) {
        correctOrger.push(item);
      }
    }
  }

  return correctOrger.join(' ');
}
