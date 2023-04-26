const testing = require("../lib/test-framework.js");
const format = require("../lib/format.js");
const eulerProject = require("../src/euler-project.js");

const title = format.title;
const display = format.display;

const areEqual = testing.areEqual;
const assert = testing.assert;
const summary = testing.summary;

const it = function(testName, funcName, testData) {
  assert(testName, funcName, testData);
};

const test = function() {
  display(title("Testing test-framework.js"));
  summary();
}

test();
