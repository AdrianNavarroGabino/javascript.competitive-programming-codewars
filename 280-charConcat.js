const charConcat = (string) => Array(Math.floor(string.length / 2))
    .fill(0)
    .reduce((acc, _, i) => acc + string[i] + string[string.length - 1 - i] + (i + 1), '');

/*
Instructions:

Given a string, you progressively need to concatenate the first letter from the left and the first letter to the right and "1", then the second letter from the left and the second letter to the right and "2", and so on.

If the string's length is odd drop the central element.

For example:

charConcat("abcdef")    == 'af1be2cd3'
charConcat("abc!def")   == 'af1be2cd3' // same result
*/

/*
Samples:

const {assert} = require("chai");

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(charConcat("abc def"),'af1be2cd3',"Should work for example test");
    assert.strictEqual(charConcat("CodeWars"),'Cs1or2da3eW4',"Should work for 'CodeWars'");
  });
});
*/