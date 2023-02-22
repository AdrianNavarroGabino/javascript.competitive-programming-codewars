const numberOfPairs = (gloves) => Object.values(gloves.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
}, {})).reduce((acc, curr) => acc + Math.floor(curr / 2), 0);

/*
Instructions:

Pair of gloves
Winter is coming, you must prepare your ski holidays. The objective of this kata is to determine the number of pair of gloves you can constitute from the gloves you have in your drawer.

Given an array describing the color of each glove, return the number of pairs you can constitute, assuming that only gloves of the same color can form pairs.

Examples:
input = ["red", "green", "red", "blue", "blue"]
result = 2 (1 red pair + 1 blue pair)

input = ["red", "red", "red", "red", "red", "red"]
result = 3 (3 red pairs)
*/

/*
Sample Tests:

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Fixed Tests", () => {
  it("Should work for Example tests", function(){
        let tests = [
          [['red','red'],1],
          [['red','green','blue'],0],
          [['gray','black','purple','purple','gray','black'],3]
        ];

        tests.forEach(a=>{
           assert.strictEqual(numberOfPairs(a[0]),a[1], `Testing for ${a[0]}`);
        });
  });
})
*/