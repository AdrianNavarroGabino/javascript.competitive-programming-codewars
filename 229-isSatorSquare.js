const isSatorSquare = (tablet) => {
    for(let i = 0; i < tablet.length / 2; i++) {
        const across = tablet[i].join('');
        const reverse = [...tablet[tablet.length - i - 1]].reverse().join('');
        const down = tablet.map((_, j) => tablet[j][i]).join('');
        const up = tablet.map((_, j) => tablet[j][tablet.length - i - 1]).reverse().join('');

        if(!(across === reverse && across === down && across === up)) {
            return false;
        }
    }

    return true;
}

/*
Instructions:

A Discovery
One fine day while tenaciously turning the soil of his fields, Farmer Arepo found a square stone tablet with letters carved into it... he knew such artifacts may 'show a message in four directions', so he wisely kept it. As he continued to toil in his work with his favourite rotary plough, he found more such tablets, but with so many crops to sow he had no time to decipher them all.

Your Task
Please help Farmer Arepo by inspecting each tablet to see if it forms a valid Sator Square!

sator square
The Square
is a two-dimentional palindrome, made from words of equal length that can be read in these four ways:

    1)    left-to-right    (across)
    2)    top-to-bottom    (down)
    3)    bottom-to-top    (up)
    4)    right-to-left    (reverse)
An Example
Considering this square:

    B A T S
    A B U T
    T U B A
    S T A B
Here are the four ways a word (in this case "TUBA") can be read:

                         down
                          ↓
           B A T S    B A T S    B A T S    B A T S
           A B U T    A B U T    A B U T    A B U T ← reverse
  across → T U B A    T U B A    T U B A    T U B A
           S T A B    S T A B    S T A B    S T A B
                                   ↑
                                   up
IMPORTANT:

In a true Sator Square, ALL of its words can be read in ALL four of these ways.
If there is any deviation, it would be false to consider it a Sator Square.
Some Details
tablet (square) dimensions range from 2x2 to 33x33 inclusive
all characters used will be upper-case alphabet letters
there is no need to validate any input
Input
an N x N (square) two-dimentional matrix of uppercase letters
Output
boolean true or false whether or not the tablet is a Sator Square
*/

/*
Samples:

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Sample Tests", () => {
  const tests = [
    [[['T', 'E', 'N'],
      ['E', 'Y', 'E'],
      ['N', 'E', 'T']], true],
  
    [[['N', 'O', 'T'],
      ['O', 'V', 'O'],
      ['N', 'O', 'T']], false],

    [[['B', 'A', 'T', 'S'],
      ['A', 'B', 'U', 'T'],
      ['T', 'U', 'B', 'A'],
      ['S', 'T', 'A', 'B']], true],
    
    [[['P', 'A', 'R', 'T'],
      ['A', 'G', 'A', 'R'],
      ['R', 'A', 'G', 'A'],
      ['T', 'R', 'A', 'M']], false],
      
    [[['S', 'A', 'T', 'O', 'R'],
      ['A', 'R', 'E', 'P', 'O'],
      ['T', 'E', 'N', 'E', 'T'],
      ['O', 'P', 'E', 'R', 'A'],
      ['R', 'O', 'T', 'A', 'S']], true],

    [[['S', 'A', 'L', 'A', 'S'],
      ['A', 'R', 'E', 'N', 'A'],
      ['L', 'E', 'V', 'E', 'L'],
      ['A', 'R', 'E', 'N', 'A'],
      ['S', 'A', 'L', 'A', 'S']], false]
  ]
  const read =(title, tablet, test)=> `: ${title} Test Tablet #${test}\n:\n:   ${tablet.map(row=>row.join` `).join`\n:   `}\n:\n`
  for(let i in tests){
    it(`Tablet ${(i*1+1)}`, () => {
      let tablet = tests[i][0];
      let expected = tests[i][1];
      let submitted = isSatorSquare(tablet);
      let message = read('Sample', tablet, i*1+1);
      assert.deepEqual(submitted, expected, message);
    });
  }
});
*/