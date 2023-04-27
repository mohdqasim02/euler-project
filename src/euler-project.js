const sumOfAP = function(number, lastMuliple) {
  const terms = Math.floor(lastMuliple / number);
  const lastTerm = number + (terms - 1) * number;
  const sum = terms * (number + lastTerm) / 2;

  return sum;
};

const sumOfMultiples = function(num1, num2, lastMultiple) {
  const sumOfN1Multiples = sumOfAP(num1, lastMultiple); 
  const sumOfN2Multiples = sumOfAP(num2, lastMultiple); 
  const sumOfIntersections = sumOfAP(num1 * num2, lastMultiple);

  return sumOfN1Multiples + sumOfN2Multiples - sumOfIntersections;
};

const sumOfEvenFiboTerms = function(lastTerm) {
  let sum = 2;
  let first = 1;
  let second = 2;
  let third = first + second;

  while(third <= lastTerm) {
    [first, second] = [second, third];
    if(third % 2 === 0) {
      sum += third;
    }
    third = first + second;
  }

  return sum;
};

const largestPrimeFactor = function(number) {
  const factors = [];
  let quotient = number;
  let divisor = 2;

  while(divisor <= quotient) {
    if(quotient % divisor === 0) {
      quotient = quotient / divisor;
      factors.push(divisor);
    }
    divisor++;
  }

  return factors.slice(-1).pop();
};

const isPalindrome = function(number) {
  let remainingDigits = number;
  let reversedNumber = 0;

  while (remainingDigits > 0) {
    reversedNumber = (reversedNumber * 10) + (remainingDigits % 10);
    remainingDigits = Math.floor(remainingDigits/10);
  }

  return number === reversedNumber;
};

const largestPalindrome = function() {
  let result = 0;

  for(let multiplicant = 999; multiplicant > 100; multiplicant -= 1) {
    let multiplier = 999;
    let product = multiplier * multiplicant;

    while(multiplier > 100) {
      if(isPalindrome(product)) {
        result = Math.max(result, product);
      }
      multiplier -= 1;
      product = multiplier * multiplicant;
    }
  }

  return result;
};

exports.sumOfMultiples = sumOfMultiples;
exports.largestPrimeFactor = largestPrimeFactor;
exports.sumOfEvenFiboTerms = sumOfEvenFiboTerms;
