'use strict'

// https://www.codewars.com/kata/56b8903933dbe5831e000c76

function spoonerize(words) {
  const parts = words.split(' ');
  const firstLetters = [parts[0].slice(0, 1), parts[parts.length - 1].slice(0, 1)];

  const spoonerized = parts.map((part, i, arr) => {
    if (i === 0) {
      const newPart = part.split('')
      
      newPart.splice(0, 1, firstLetters[1]);

      return newPart.join('');
    }

    if (i === arr.length - 1) {
      const newPart = part.split('')
      
      newPart.splice(0, 1, firstLetters[0]);

      return newPart.join('');
    }

    return part;
  })

  return spoonerized.join(' ');
}
