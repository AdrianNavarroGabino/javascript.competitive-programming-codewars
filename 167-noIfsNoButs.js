const noIfsNoButs = (a, b) => `${a} is ${(a > b && 'greater than') || (a < b && 'smaller than') || 'equal to'} ${b}`;

/*
Instructions:

Write a function that accepts two numbers a and b and returns whether a is smaller than, bigger than, or equal to b, as a string.

(5, 4)   ---> "5 is greater than 4"
(-4, -7) ---> "-4 is greater than -7"
(2, 2)   ---> "2 is equal to 2"
There is only one problem...

You cannot use if statements, and you cannot use the ternary operator ? :.

In fact the word if and the character ? are not allowed in your code.
*/

/*
Samples:

describe("Tests suite", function () {
    const { strictEqual } = require('chai').assert;

    function doTest(a, b, expected) {
        const actual = noIfsNoButs(a, b);
        strictEqual(actual, expected, `for a = ${a} and b = ${b}`);
    }

    it("Should handle manual tests", function () {
        doTest(45, 51, "45 is smaller than 51");
        doTest(1, 2, "1 is smaller than 2");
        doTest(-3, 2, "-3 is smaller than 2");
        doTest(1, 1, "1 is equal to 1");
        doTest(100, 100, "100 is equal to 100");
        doTest(100, 80, "100 is greater than 80");
        doTest(20, 19, "20 is greater than 19");
    });
});
*/