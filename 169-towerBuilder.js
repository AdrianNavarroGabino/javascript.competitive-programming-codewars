const towerBuilder = (nFloors) => Array(nFloors).fill(0).map((_, i) => {
    const tree = Array(i * 2 + 1).fill('*').join('');
    const spaces = Array(((nFloors - 1) * 2 + 1 - tree.length) / 2).fill(' ').join('');
    return `${spaces}${tree}${spaces}`;
});

/*
Instructions:

Build Tower
Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]
*/

/*
Samples:

const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
Test.assertDeepEquals(towerBuilder(1), ["*"]);
Test.assertDeepEquals(towerBuilder(2), [" * ","***"]);
Test.assertDeepEquals(towerBuilder(3), ["  *  "," *** ","*****"]);
  });
});
*/