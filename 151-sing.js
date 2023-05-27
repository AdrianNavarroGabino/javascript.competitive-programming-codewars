const sing = () => Array(100).fill(0).map((_, i) => i === 99 ?
    [
        'No more bottles of beer on the wall, no more bottles of beer.',
        'Go to the store and buy some more, 99 bottles of beer on the wall.'
    ] :
    [
        `${99 - i} bottle${i === 98 ? '' : 's'} of beer on the wall, ${99 - i} bottle${i === 98 ? '' : 's'} of beer.`,
        `Take one down and pass it around, ${i === 98 ? 'no more' : 98 - i} bottle${i === 97 ? '' : 's'} of beer on the wall.`
    ]).flat();

/*
Instructions:

Instructions
Complete the function that returns the lyrics for the song 99 Bottles of Beer as an array of strings: each line should be a separate element - see the example at the bottom.

Note: in order to avoid hardcoded solutions, the size of your code is limited to 1000 characters

Lyrics
99 bottles of beer on the wall, 99 bottles of beer.
Take one down and pass it around, 98 bottles of beer on the wall.

98 bottles of beer on the wall, 98 bottles of beer.
Take one down and pass it around, 97 bottles of beer on the wall.

...and so on...

3 bottles of beer on the wall, 3 bottles of beer.
Take one down and pass it around, 2 bottles of beer on the wall.

2 bottles of beer on the wall, 2 bottles of beer.
Take one down and pass it around, 1 bottle of beer on the wall.

1 bottle of beer on the wall, 1 bottle of beer.
Take one down and pass it around, no more bottles of beer on the wall.

No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.

Example
[ "99 bottles of beer on the wall, 99 bottles of beer.",
  "Take one down and pass it around, 98 bottles of beer on the wall.",
  "98 bottles of beer on the wall, 98 bottles of beer.",

  ...and so on...

  "3 bottles of beer on the wall, 3 bottles of beer.",
  "Take one down and pass it around, 2 bottles of beer on the wall.",
  "2 bottles of beer on the wall, 2 bottles of beer.",
  "Take one down and pass it around, 1 bottle of beer on the wall.",
  "1 bottle of beer on the wall, 1 bottle of beer.",
  "Take one down and pass it around, no more bottles of beer on the wall.",
  "No more bottles of beer on the wall, no more bottles of beer.",
  "Go to the store and buy some more, 99 bottles of beer on the wall." ]
*/

/*
Samples:

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Sample test", function() {
  it("Test", function() {
    let song = sing();
    assert.equal(song[0], '99 bottles of beer on the wall, 99 bottles of beer.');
    assert.equal(song[199], 'Go to the store and buy some more, 99 bottles of beer on the wall.');
  });
});
*/