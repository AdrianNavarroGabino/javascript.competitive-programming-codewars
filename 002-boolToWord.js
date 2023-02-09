const boolToWord = (bool) => bool && 'Yes' || 'No';

/*
Instructions:

Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
*/

/*
Sample Tests:

const { assert } = require("chai")

describe("Basic tests", () => {
  it("Testing for basic tests", () => {
    assert.strictEqual(boolToWord(true), 'Yes')
    assert.strictEqual(boolToWord(false), 'No')
    });
  });
*/