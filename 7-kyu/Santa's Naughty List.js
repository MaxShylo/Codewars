'use strict'

// https://www.codewars.com/kata/5a0b4dc2ffe75f72f70000ef

function findChildren(santasList, children) {
  const correctChildren = [];

  children.forEach(child => {
    if (santasList.includes(child) && !correctChildren.includes(child)) {
      correctChildren.push(child);
    }
  });

  return correctChildren.sort();
}
