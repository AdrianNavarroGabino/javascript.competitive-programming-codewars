const multiplicationTable = (size) => Array(size).fill(0).map((_, i) => Array(size).fill(0).map((_, j) => (i + 1) * (j + 1)));

/*
Instructions:

Your task, is to create N×N multiplication table, of size provided in parameter.

For example, when given size is 3:

1 2 3
2 4 6
3 6 9
For the given example, the return value should be:

[[1,2,3],[2,4,6],[3,6,9]]
*/

/*
Samples:

const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
Test.assertSimilar(multiplicationTable(3), [[1,2,3], [2,4,6], [3,6,9]]);
  });
});
*/