'use strict'

// https://www.codewars.com/kata/5277c8a221e209d3f6000b56

function validBraces(braces) {
  const stack = [];

  for (const brace of braces) {
    switch (brace) {
      case '(':
      case '{':
      case '[':
        stack.push(brace);

        continue;
      case ')':
        if (stack[stack.length - 1] === '(') {
          stack.pop();
          continue;
        }

        return false;
      case '}':
        if (stack[stack.length - 1] === '{') {
          stack.pop();
          continue;
        }

        return false;
      case ']':
        if (stack[stack.length - 1] === '[') {
          stack.pop();
          continue;
        }

        return false;
    }
  }

  return stack.length === 0;
}
