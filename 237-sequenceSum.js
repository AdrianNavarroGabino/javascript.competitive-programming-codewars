const SequenceSum = (() => {
    function SequenceSum() {}
    
    SequenceSum.showSequence = (count) => count < 0 ? `${count}<0` : (count === 0 ? '0=0' : `${Array(count + 1).fill(0).map((_, i) => i).join('+')} = ${count * (count + 1) / 2}`);

    return SequenceSum;
})();

/*
Instructions:

Description:

We want to generate a function that computes the series starting from 0 and ending until the given number.

Example:
Input:

> 6
Output:

0+1+2+3+4+5+6 = 21

Input:

> -15
Output:

-15<0

Input:

> 0
Output:

0=0
*/

/*
Samples:

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(SequenceSum.showSequence(6),"0+1+2+3+4+5+6 = 21")
  });
});
*/