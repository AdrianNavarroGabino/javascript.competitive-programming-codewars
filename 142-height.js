const height = (n) => {
    let result = 2000000;
    let height = 2000000;
    
    for(let i = 0; i < n; i++) {
        height /= 2.5;
        result += height;
    }

    return result.toFixed(3);
}

/*
Instructions:

The Cat In The Hat has cat A under his hat, cat A has cat B under his hat and so on until Z

The Cat In The Hat is 2,000,000 cat units tall.

Each cat is 2.5 times bigger than the cat underneath their hat.

Find the total height of the cats if they are standing on top of one another.

Counting starts from the Cat In The Hat

n = the number of cats

fix to 3 decimal places.
*/

/*
Samples:

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Smaple Tests", () => {
  it("Should pass sample tests", () => {
    assert.strictEqual(height(7), "3331148.800");
    assert.strictEqual(height(0), "2000000.000");
  });
});
*/