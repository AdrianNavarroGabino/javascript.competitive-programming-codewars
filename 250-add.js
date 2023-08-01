const add = (num1, num2) => {
    let result = '';
    let n1 = num1.toString();
    let n2 = num2.toString();

    if(num1 > num2) {
        n2 = n2.padStart(n1.length, '0');
    } else {
        n1 = n1.padStart(n2.length, '0');
    }

    for(let i = 0; i < n1.length; i++) {
        result += (parseInt(n1[i]) + parseInt(n2[i]));
    }

    return parseInt(result);
}

/*
Instructions:

For this kata you will have to forget how to add two numbers.

It can be best explained using the following meme:

Dayane Rivas adding up a sum while competing in the Guatemalan television show "Combate" in May 2016

In simple terms, our method does not like the principle of carrying over numbers and just writes down every number it calculates :-)

You may assume both integers are positive integers.
*/

/*
Samples:

const { assert } = require('chai');

describe("Silly addition", () => {
  it("Real addition", () => {
    assert.strictEqual(add(2, 11), 13);
    assert.strictEqual(add(0, 1), 1);
    assert.strictEqual(add(0, 0), 0);
  });
  
  it("Silly addition", () => {
    assert.strictEqual(add(16, 18), 214);
    assert.strictEqual(add(26, 39), 515);
    assert.strictEqual(add(122, 81), 1103);
  });
  
  it("Big addition", () => {
    assert.strictEqual(add(1222, 30277), 31499);
    assert.strictEqual(add(1236, 30977), 31111013);
    assert.strictEqual(add(38810, 1383), 391193);
    assert.strictEqual(add(49999, 49999), 818181818);
  });
});
*/