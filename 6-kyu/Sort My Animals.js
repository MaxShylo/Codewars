'use strict'

// https://www.codewars.com/kata/58ff1c8b13b001a5a50005b4

function sortAnimal(animal) {
  if (!animal) {
    return null;
  }

  if (!animal.length) {
    return [];
  }

  return [...animal].sort((a, b) => {
    const sortByNumOfLegs = a.numberOfLegs - b.numberOfLegs

    if (sortByNumOfLegs === 0) {
      return a.name.localeCompare(b.name);
    }

    return sortByNumOfLegs;
  });
}
