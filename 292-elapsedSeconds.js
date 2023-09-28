const elapsedSeconds = (startDate, endDate) => (endDate - startDate) / 1000;

/*
Instructions:

Complete the function so that it returns the number of seconds that have elapsed between the start and end times given.

Tips:
The start/end times are given as Date (JS/CoffeeScript), DateTime (C#), Time (Nim), datetime(Python) and Time (Ruby) instances.
The start time will always be before the end time.
*/

/*
Samples:

const strictEqual = require('chai').assert.strictEqual;

function doTest (startDate, endDate, expected) {
    const actual = elapsedSeconds(startDate, endDate, expected);
    strictEqual(actual, expected, `for\n ${startDate} \nand\n ${endDate}`);
}

describe("Tests", () => {
    it("sample tests", () => {
        const start = new Date(2013, 1, 1, 0, 0, 1);
        const end = new Date(2013, 1, 1, 0, 0, 2);
        const end2 = new Date(2013, 1, 1, 0, 0, 20);
        const end3 = new Date(2013, 1, 1, 0, 1, 20);

        doTest(start, end, 1);
        doTest(end, end2, 18);
        doTest(start, end2, 19);
        doTest(start, end3, 79);
        doTest(end, end3, 78);
    });
});
*/