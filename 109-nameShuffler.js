const nameShuffler = (str) => str.split(' ').reverse().join(' ');

/*
Instructions:

Write a function that returns a string in which firstname is swapped with last name.

Example(Input --> Output)

"john McClane" --> "McClane john"
*/

/*
Samples:

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(nameShuffler('john McClane'),'McClane john');
    assert.strictEqual(nameShuffler('Mary jeggins'),'jeggins Mary')
    assert.strictEqual(nameShuffler('tom jerry'),'jerry tom')
  });
});
*/