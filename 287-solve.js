const solve = (s) => Math.max(...s.match(/[aeiou]+/gi).map((v) => v.length));

/*
Instructions:

The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.

Good luck!

If you like substring Katas, please try:

Non-even substrings

Vowel-consonant lexicon
*/

/*
Samples:

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", function(){
  it("Test", () => {
    assert.strictEqual(solve("codewarriors"),2);
    assert.strictEqual(solve("suoidea"),3);
    assert.strictEqual(solve("ultrarevolutionariees"),3);
    assert.strictEqual(solve("strengthlessnesses"),1);
    assert.strictEqual(solve("cuboideonavicuare"),2);
    assert.strictEqual(solve("chrononhotonthuooaos"),5);
    assert.strictEqual(solve("iiihoovaeaaaoougjyaw"),8);
  })
});
*/