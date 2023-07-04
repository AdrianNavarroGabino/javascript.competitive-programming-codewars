const noOdds = (values) => values.filter(a => !(a % 2));

/*
Instructions:

Write a small function that returns the values of an array that are not odd.

All values in the array will be integers. Return the good values in the order they are given.
*/

/*
Samples:

const { assert } = require("chai")

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.deepEqual( noOdds( [0,1] ), [0] )
    assert.deepEqual( noOdds( [0,1,2,3] ), [0,2] )
    })
  })
*/