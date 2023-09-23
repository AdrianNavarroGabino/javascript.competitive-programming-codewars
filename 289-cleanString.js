const cleanString = (s) => Array.from(s).reduce((acc, l) => l === '#' ? acc.substring(0, acc.length - 1) : acc + l, '');

/*
Instructions:

Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

Your task is to process a string with "#" symbols.

Examples
"abc#d##c"      ==>  "ac"
"abc##d######"  ==>  ""
"#######"       ==>  ""
""              ==>  ""
*/

/*
Samples:

const {assert} = require('chai');

describe("cleanString", () => {
  it("should work correctly", () => {
    assert.strictEqual(cleanString('abc#d##c'), 'ac');
    assert.strictEqual(cleanString('abc####d##c#'), '');
  });
});
*/