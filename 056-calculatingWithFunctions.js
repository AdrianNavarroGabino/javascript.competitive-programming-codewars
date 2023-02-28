const zero = (op) => op ? Math.floor(eval(`0 ${op.op} ${op.num}`)) : 0;
const one = (op) => op ? Math.floor(eval(`1 ${op.op} ${op.num}`)) : 1;
const two = (op) => op ? Math.floor(eval(`2 ${op.op} ${op.num}`)) : 2;
const three = (op) => op ? Math.floor(eval(`3 ${op.op} ${op.num}`)) : 3;
const four = (op) => op ? Math.floor(eval(`4 ${op.op} ${op.num}`)) : 4;
const five = (op) => op ? Math.floor(eval(`5 ${op.op} ${op.num}`)) : 5;
const six = (op) => op ? Math.floor(eval(`6 ${op.op} ${op.num}`)) : 6;
const seven = (op) => op ? Math.floor(eval(`7 ${op.op} ${op.num}`)) : 7;
const eight = (op) => op ? Math.floor(eval(`8 ${op.op} ${op.num}`)) : 8;
const nine = (op) => op ? Math.floor(eval(`9 ${op.op} ${op.num}`)) : 9;

const plus = (num) => ({op: '+', num});
const minus = (num) => ({op: '-', num});
const times = (num) => ({op: '*', num});
const dividedBy = (num) => ({op: '/', num});

/*
Instructions:

This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666...:
eight(dividedBy(three()));
*/

/*
Sample Tests:

const { assert } = require('chai');

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(seven(times    (five ())), 35);
    assert.strictEqual(four (plus     (nine ())), 13);
    assert.strictEqual(eight(minus    (three())),  5);
    assert.strictEqual(six  (dividedBy(two  ())),  3);
  });
});
*/