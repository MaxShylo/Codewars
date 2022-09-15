'use strict'

// https://www.codewars.com/kata/money-money-money/javascript

function calculateYears(principal, interest, tax, desired) {
  let currentSum = principal;
  let year = 0;

  while (currentSum < desired) {
    year++
    const interestSum = currentSum * interest;
    const taxificationInterest = interestSum * tax;
    currentSum += interestSum - taxificationInterest;
  }

  return year;
}
