'use strict'

// https://www.codewars.com/kata/5631ac5139795b281d00007d

var WordDictionary = function () {
  this.listWord = [];
};

WordDictionary.prototype.addWord = function (word) {
  this.listWord.push(word);
};

WordDictionary.prototype.search = function (word) {
  return this.listWord.some((savedWord) => {
    if (savedWord.length === word.length) {
      for (let letter = 0; letter < word.length; letter++) {
        if ((savedWord[letter] !== word[letter]) && (word[letter] !== '.')) {
          return false;
        } else {
          continue;
        }
      }

      return true;
    }

    return false;
  })
};
