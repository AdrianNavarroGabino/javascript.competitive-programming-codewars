const colourAssociation = (array) => array.reduce((acc, curr) => {
    acc.push({});
    acc[acc.length - 1][curr[0]] = curr[1];

    return acc;
}, []);

/*
Instructions:

Colour plays an important role in our lifes. Most of us like this colour better then another. User experience specialists believe that certain colours have certain psychological meanings for us.

You are given a 2D array, composed of a colour and its 'common' association in each array element. The function you will write needs to return the colour as 'key' and association as its 'value'.

For example:

var array = [["white", "goodness"], ...] //returns [{white: 'goodness'}, ...]
*/

/*
Samples:

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Sample Tests", () => {
  it("Should pass sample tests", () => {
    assert.deepEqual(colourAssociation([["white", "goodness"], ["blue", "tranquility"]]), [{white:"goodness"},{blue:"tranquility"}]);
    assert.deepEqual(colourAssociation([["red", "energy"],["yellow", "creativity"],["brown" , "friendly"],["green", "growth"]]), [{red: "energy"},{yellow: "creativity"}, {brown: "friendly"},{green: "growth"}]);
  });
});
*/