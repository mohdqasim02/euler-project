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

exports.sumOfMultiples = sumOfMultiples;
