const findLongest = (array) => array.reduce((acc, curr) => curr.toString().length > acc.toString().length ? curr : acc, array[0]);

/*
Instructions:

Find the number with the most digits.

If two numbers in the argument array have the same number of digits, return the first one in the array.
*/

/*
Samples:

const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(findLongest([1, 10, 100]), 100)
Test.assertEquals(findLongest([9000, 8, 800]), 9000)
Test.assertEquals(findLongest([8, 900, 500]), 900)
  });
});
*/