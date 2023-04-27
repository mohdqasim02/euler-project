const {describe, it} = require('node:test');
const {strictEqual, deepStrictEqual} = require('assert');
const {
  sumOfMultiples,
  sumSquareDifference,
  sumOfEvenFiboTerms, 
  largestPrimeFactor,
  largestPalindrome,
} = require("../src/euler-project.js");

describe('sumOfMultiples', function() {
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

describe('sumOfEvenFiboTerms', function() {
  it("should give 2 for two terms", function() {
    strictEqual(sumOfEvenFiboTerms(3), 2);
  });

  it("should give 10 for 5 terms", function() {
    strictEqual(sumOfEvenFiboTerms(13), 10);
  });

  it("should give 4613732 for lastTerm as 4000000", function() {
    strictEqual(sumOfEvenFiboTerms(4000000), 4613732);
  });
});

describe('largestPrimeFactor', function() {
  it("should give 3 for 9", function() {
    strictEqual(largestPrimeFactor(9), 3);
  });

  it("should give 5 for 15", function() {
    strictEqual(largestPrimeFactor(15), 5);
  });

  it("should give 6857 for 600851475143", function() {
    strictEqual(largestPrimeFactor(600851475143), 6857);
  });
});

describe("largestPalindrome", function() {
  it("should give 906609 for three digit products", function() {
    strictEqual(largestPalindrome(), 906609);
  });
})

describe("sumSquareDifference", function() {
  it("should give 2640 for first ten natural numbers", function() {
    strictEqual(sumSquareDifference(10), 2640);
  });
})
