const tailSwap = (arr, arr1, arr2) => (
    arr1 = arr[0].split(':'),
    arr2 = arr[1].split(':'),
    [`${arr1[0]}:${arr2[1]}`, `${arr2[0]}:${arr1[1]}`]
);

/*
Instructions:

You'll be given a list of two strings, and each will contain exactly one colon (":") in the middle (but not at beginning or end). The length of the strings, before and after the colon, are random.

Your job is to return a list of two strings (in the same order as the original list), but with the characters after each colon swapped.

Examples
["abc:123", "cde:456"]  -->  ["abc:456", "cde:123"]
["a:12345", "777:xyz"]  -->  ["a:xyz", "777:12345"]
*/

/*
Samples:

const { assert, config } = require("chai");
config.truncateThreshold = 0;

describe("Tests", () => {
  it("Basic Tests", () => {
    doTest(['abc:123', 'cde:456'], ['abc:456', 'cde:123']);
    doTest(['a:12345', '777:xyz'], ['a:xyz', '777:12345']);
  });
});

function doTest(arr, exp) {
  const msg = "Test failed for " + JSON.stringify(arr);
  assert.deepEqual(tailSwap(arr), exp, msg);
}
*/