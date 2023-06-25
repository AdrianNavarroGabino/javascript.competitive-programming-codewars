const toDayOfYear = (arr) => ((new Date(arr[2], arr[1] - 1, arr[0])).getTime() - (new Date(arr[2] - 1, 11, 31)).getTime()) / (1000 * 3600 * 24);

console.log(toDayOfYear([1,3,1524]));

/*
Instructions:

Work out what number day of the year it is.

toDayOfYear([1, 1, 2000]) => 1
The argument passed into the function is an array with the format [D, M, YYYY], e.g. [1, 2, 2000] for February 1st, 2000 or [22, 12, 1999] for December 22nd, 1999.

Don't forget to check for whether it's a leap year! Three criteria must be taken into account to identify leap years:

The year can be evenly divided by 4;
If the year can be evenly divided by 100, it is NOT a leap year, unless;
The year is also evenly divisible by 400. Then it is a leap year.
*/

/*
Samples:

const strictEqual = require('chai').assert.strictEqual;

describe("Tests", () => {
    it("test", () => {
        strictEqual(toDayOfYear([25, 12, 2017]), 359,);
        strictEqual(toDayOfYear([31, 10, 1991]), 304);
        strictEqual(toDayOfYear([1, 5, 3000]), 121);
        strictEqual(toDayOfYear([14, 3, 1066]), 73);
        strictEqual(toDayOfYear([5, 11, 1604]), 310);

        strictEqual(toDayOfYear([31, 12, 2000]), 366);
        strictEqual(toDayOfYear([31, 12, 2001]), 365);
        strictEqual(toDayOfYear([31, 12, 2004]), 366);
        strictEqual(toDayOfYear([31, 12, 2100]), 365);
    });
});
*/