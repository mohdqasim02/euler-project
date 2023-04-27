const sumOfMultiples = function(number, upto) {
  let sum = 0;

  for(let index = 0; index < upto; index += number) {
    sum += number;
  }

  return sum;
};

exports.sumOfMultiples = sumOfMultiples;
