const showBits = (n) => n >= 0 ?
    n
        .toString(2)
        .padStart(32, '0')
        .split('')
        .map((el) => +el) :
    (parseInt((n * -1)
        .toString(2)
        .padStart(32, '0')
        .split('')
        .map((el) => el === '0' ? 1 : 0)
        .join(''), 2) + 1)
            .toString(2)
            .padStart(32, '0')
            .split('')
            .map((el) => +el);

/*
Instructions:

Write a function that returns an array with each element representing one bit of a 32 bit integer in such a way that if printed it would appear as the binary representation of the integer (Least Significant Bit on the right).

e.g. 1 = 00000000000000000000000000000001

Assign either a 1 or a 0 to the array element depending on whether the bit at the corresponding position is a 1 or 0.

For example (input -> output):

1 -> [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]
-1 -> [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
The function takes one argument (n) which is the integer to be converted to binary.
*/

/*
Samples:

const chai = require("chai");
chai.config.truncateThreshold = 0;
const deepEqual = chai.assert.deepEqual;

function doTest (input, expected) {
    const actual = showBits(input);
    deepEqual(actual, expected, `for n = ${input}:\n`);
}

describe("Tests suite", function () {
    it('sample tests', function () {
        doTest(211,
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1]
        );
        doTest(-1,
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        );
        doTest(701,
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1]
        );
        doTest(0,
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        );
        doTest(2 ** 31 - 1,
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        );
        doTest(-(2 ** 31),
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        );
    });
});
*/