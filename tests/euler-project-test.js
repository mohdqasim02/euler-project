const {describe, it} = require('node:test');
const {strictEqual, deepStrictEqual} = require('assert');
const {sumOfMultiples} = require("../src/euler-project.js");

describe('SumOfMultiples', function() {
  it("should give 8 below for sum below 6", function() {
    strictEqual(sumOfMultiples(3, 5, 5), 8);
  });

  it("should give 23 below for sum below 9", function() {
    strictEqual(sumOfMultiples(3, 5, 9), 23);
  });

  it("should give 233168 for sum below 1000", function() {
    strictEqual(sumOfMultiples(3, 5, 999), 233168);
  });
});
