const sumOfMultiples = function(number, lastMuliple) {
  const terms = Math.floor(lastMuliple / number);
  const lastTerm = number + (terms - 1) * number;
  const sum = terms * (number + lastTerm) / 2;

  return sum;
};

const sumOfMultiplesOfNumbers = function(num1, num2, lastMultiple) {
  const sumOfN1Multiples = sumOfMultiples(num1, lastMultiple); 
  const sumOfN2Multiples = sumOfMultiples(num2, lastMultiple); 
  const sumOfIntersections = sumOfMultiples(num1 * num2, lastMultiple);

  return sumOfN1Multiples + sumOfN2Multiples - sumOfIntersections;
};

exports.sumOfMultiples = sumOfMultiples;
exports.sumOfMultiplesOfNumbers = sumOfMultiplesOfNumbers;
