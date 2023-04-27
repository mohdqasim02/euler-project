const {title, display} = require("../lib/format.js");
const {assert, summary} = require("../lib/test-framework.js");
const {sumOfMultiples, sumOfMultiplesOfNumbers} = require("../src/euler-project.js");

const it = function(testName, funcName, testData) {
  assert(testName, funcName, testData);
};

const testSumOfMultiples = function() {
  it("should give zero for sum below the number itself", "sumOfMultiples", {
    expected: 0,
    actual: sumOfMultiples(3, 2)
  });

  it("should give the number for sum below successor of the number", "sumOfMultiples", {
    expected: 3,
    actual: sumOfMultiples(3, 5)
  });

  it("should give the number for sum below successor of the number", "sumOfMultiples", {
    expected: 18,
    actual: sumOfMultiples(3, 10)
  });

};

const testSumOfMultiplesOfNumbers = function() {
  it("should give 8 below for sum below 6", "sumOfMultiples", {
    expected: 8,
    actual: sumOfMultiplesOfNumbers(3, 5, 5)
  });

  it("should give 23 for sum below 10", "sumOfMultiplesOfNumbers", {
    expected: 23,
    actual: sumOfMultiplesOfNumbers(3, 5, 9)
  });

  it("should give 233168 for sum below 1000", "sumOfMultiplesOfNumbers", {
    expected: 233168,
    actual: sumOfMultiplesOfNumbers(3, 5, 999)
  });

};
const test = function() {
  display(title("Testing test-framework.js"));
  testSumOfMultiples();
  testSumOfMultiplesOfNumbers();
  summary();
}

test();
