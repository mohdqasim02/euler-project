const {title, display} = require("../lib/format.js");
const {assert, summary} = require("../lib/test-framework.js");
const {sumOfMultiples} = require("../src/euler-project.js");

const it = function(testName, funcName, testData) {
  assert(testName, funcName, testData);
};

const testSumOfMultiples = function() {
  it("should give zero for sum upto zero elements", "sumOfMultiples", {
    expected: 0,
    actual: sumOfMultiples(3, 0)
  });

  it("should give the number for sum of one element", "sumOfMultiples", {
    expected: 3,
    actual: sumOfMultiples(3, 1)
  });

};
const test = function() {
  display(title("Testing test-framework.js"));
  testSumOfMultiples();
  summary();
}

test();
