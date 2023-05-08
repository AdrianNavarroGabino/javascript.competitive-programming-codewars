const graph = (arr) => {
    let res = '';
    const topLim = Math.max(...arr);

    for(let i = topLim; i >= 0; i--) {
        for(let j of arr) {
            if(j === i) {
                res += ' ____ ';
            } else if(j < i) {
                res += '......';
            } else {
                res += '|    |';
            }
        }
        if(i === topLim) {
            res += ' ^ ';
        } else {
            res += ' | ';
        }
        res += i;
        if(i !== 0) {
            res += '\n';
        }
    }
    return res;
}

/*
Instructions:

You have done some data collection today and you want the data to be well presented by a graph so you have decided to make a quick diagram. Suppose that for this kata your data is presented by an array by their value eg [10,5,3,1,4], then you must present your data as follows:


for data = [10,5,3,1,4] :
 ____ ........................ ^ 10
|    |........................ | 9
|    |........................ | 8
|    |........................ | 7
|    |........................ | 6
|    | ____ .................. | 5
|    ||    |............ ____  | 4
|    ||    | ____ ......|    | | 3
|    ||    ||    |......|    | | 2
|    ||    ||    | ____ |    | | 1
|    ||    ||    ||    ||    | | 0
GOOD TO KNOW :
Each bar is always of width 6.

The vertical axis must be surrounded with one space character on each side.

No trailing spaces on any line.

For this kata we use :

the following characters : '_',' ','|','.','^'.
some numbers.
Return type :

Your code must return a character string joined by \n.
[] and [0] has different returns "" and " ____  ^ 0"
CRITERIA :
The length of the array is always less than 50.
The value of a data is also less than 50 and always positive.
GOOD LUCK :)
*/

/*
Samples:

const chai = require("chai");
chai.config.truncateThreshold=0;
const assert = chai.assert;

describe("simple test case", function() {
  it("given [1,3,5,4,1]", function() {
    assert.strictEqual(graph([1,3,5,4,1]), "............ ____ ............ ^ 5\n............|    | ____ ...... | 4\n...... ____ |    ||    |...... | 3\n......|    ||    ||    |...... | 2\n ____ |    ||    ||    | ____  | 1\n|    ||    ||    ||    ||    | | 0");
  });
  
  it("given [1,4,2]", function() {
    assert.strictEqual(graph([1,4,2]), "...... ____ ...... ^ 4\n......|    |...... | 3\n......|    | ____  | 2\n ____ |    ||    | | 1\n|    ||    ||    | | 0");
  });
  
  it("given [10,5,3,1,4]", function() {
    assert.strictEqual(graph([10,5,3,1,4]), " ____ ........................ ^ 10\n|    |........................ | 9\n|    |........................ | 8\n|    |........................ | 7\n|    |........................ | 6\n|    | ____ .................. | 5\n|    ||    |............ ____  | 4\n|    ||    | ____ ......|    | | 3\n|    ||    ||    |......|    | | 2\n|    ||    ||    | ____ |    | | 1\n|    ||    ||    ||    ||    | | 0");
  });
  
  it("given []", function() {
    assert.strictEqual(graph([]), "");
  });
  
  it("given [0]", function() {
    assert.strictEqual(graph([0]), " ____  ^ 0");
  });
});
*/