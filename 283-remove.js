const remove = (string) => string.replace(/!$/g, '');

/*
Instructions:

Description:
Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

Examples
"Hi!"     ---> "Hi"
"Hi!!!"   ---> "Hi!!"
"!Hi"     ---> "!Hi"
"!Hi!"    ---> "!Hi"
"Hi! Hi!" ---> "Hi! Hi"
"Hi"      ---> "Hi"
*/

/*
Samples:

const strictEqual = require("chai").assert.strictEqual;

function doTest(input, expected) {
    const actual = remove(input);
    strictEqual(actual, expected, `for string:\n"${input}"\n`);
}

describe("Tests suite", function () {
    it("sample tests", function () {
        doTest("Hi!", "Hi");
        doTest("Hi!!!", "Hi!!");
        doTest("!Hi", "!Hi");
        doTest("!Hi!", "!Hi");
        doTest("Hi! Hi!", "Hi! Hi");
        doTest("Hi", "Hi");
    });
});
*/