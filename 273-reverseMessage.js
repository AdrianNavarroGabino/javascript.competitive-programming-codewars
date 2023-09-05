const reverseMessage = (str) => str
    .toLowerCase()
    .split('')
    .reverse()
    .join('')
    .split(' ')
    .map((w) => w.substring(0, 1).toUpperCase() + w.substring(1)).join(' ');

/*
Instructions:

Reverse a message so that the words and letters passed into it are made lower case and reversed. In addition, capitalise the first letter of the newly reversed words. If a number or symbol(!#,>) is now in the first position of the word, no capitalisation needs to occur.

Example:

reverseMessage('This is an example of a Reversed Message!');
Returns: '!egassem Desrever A Fo Elpmaxe Na Si Siht'
*/

/*
Samples:

const chai = require("chai");
const assert = chai.assert;
describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(reverseMessage('AaaaA'),'Aaaaa')
    assert.strictEqual(reverseMessage('Hello there'),'Ereht Olleh')
    assert.strictEqual(reverseMessage('Pl34k78j'), 'J87k43lp')
    assert.strictEqual(reverseMessage('Reverse this message!'),'!egassem Siht Esrever')
    assert.strictEqual(reverseMessage('Today is the 14th of January!'),'!yraunaj Fo Ht41 Eht Si Yadot')
    assert.strictEqual(reverseMessage('hty56hA T76#Td'),'Dt#67t Ah65yth')
    assert.strictEqual(reverseMessage(''),'')
  });
});
*/