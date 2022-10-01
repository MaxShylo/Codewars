'use strict'

// https://www.codewars.com/kata/54149054c1f3a6675b0009c2

function type(val) {
  const type = (typeof val).split('').map((letter, i) => {
    if (i === 0) {
      return letter.toUpperCase();
    }

    return letter;
  }).join('');

  let additional = '';

  switch (type) {
    case 'Number':
      if (isNaN(val)) {
        additional += 'NaN';
        break;
      }

      if (!isFinite(val)) {
        additional += 'Infinite';
        break;
      }

      if (val.toString().includes('.')) {
        additional += 'Float';
        break;
      } else {
        additional += 'Integer';
        break;
      }

    case 'String':
      if (isFinite(+val) && !isNaN(+val)) {
        additional += 'Numeric';
        break;
      }

    case 'Object':
      if (val === null) {
        return 'Null';
      }

      if (val.toString().startsWith('/')) {
        return 'RegExp';
      }

      if (val instanceof Array) {
        return 'Array';
      }

      if (val.__proto__.constructor.name) {
        return `${val.__proto__.constructor.name}`;
      }
  }

  return additional ? `${type} ${additional}` : type;
}
