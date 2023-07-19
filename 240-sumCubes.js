const sumCubes = (n) => Array(n).fill(0).reduce((acc, _, i) => Math.pow(i + 1, 3) + acc, 0);

/*
Instructions:

Write a function that takes a positive integer n, sums all the cubed values from 1 to n (inclusive), and returns that sum.

Assume that the input n will always be a positive integer.

Examples: (Input --> output)

2 --> 9 (sum of the cubes of 1 and 2 is 1 + 8)
3 --> 36 (sum of the cubes of 1, 2, and 3 is 1 + 8 + 27)
*/

/*
Samples:

const chai = require("chai");
const assert = chai.assert;
const _ = require("lodash");
chai.config.truncateThreshold=0;

describe("Sum of Cubes", () => {
  it("Fixed tests", () => {
    _.shuffle( [ 
      [1, 1], [2, 9], [3, 36], [4, 100], 
      [10, 3025], [123, 58155876] 
    ] ).forEach(([n,exp]) => assert.strictEqual(sumCubes(n), exp))  
  });
});
*/