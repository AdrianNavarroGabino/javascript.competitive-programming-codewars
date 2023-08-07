const insertDash = (num) => num
    .toString()
    .replace(/([13579])([13579])/g, '$1-$2')
    .replace(/([13579])([13579])/g, '$1-$2');

/*
Instructions:

Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.

Note that the number will always be non-negative (>= 0).
*/

/*
Samples:

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Fixed tests", () => {
    assert.strictEqual(insertDash(454793),'4547-9-3');
    assert.strictEqual(insertDash(123456),'123456');
    assert.strictEqual(insertDash(1003567),'1003-567');
  })
});
*/