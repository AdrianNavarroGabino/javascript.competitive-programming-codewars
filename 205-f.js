const f = (x, cc) => Object.values(cc).reduce((acc, curr, i, arr) => {
    if(i === arr.length - 1) {
        acc[curr] = arr[0];
    } else {
        acc[curr] = arr[i + 1];
    }

    return acc;
}, {})[x];

/*
Instructions:

Alternating Among Three Values
Suppose a variable x can have only three possible different values a, b and c, and you wish to assign to x the value other than its current one, and you wish your code to be independent of the values of a, b and c.

What is the most efficient way to cycle among three values? Write a function f so that it satisfies

  f(a) = b
  f(b) = c
  f(c) = a
EXAMPLE
  f( 3, { a:3, b:4, c:5 } ) => 4
*/

/*
Samples:

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Sample Tests", () => {
  it("test", () => {
    assert.strictEqual( f( 3, { a:3, b:4, c:5 } ), 4 );
    assert.strictEqual( f( 4, { a:3, b:4, c:5 } ), 5 );
    assert.strictEqual( f( 5, { a:3, b:4, c:5 } ), 3 );
  });
});
*/