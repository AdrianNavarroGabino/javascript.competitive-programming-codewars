const pattern = (n) => n < 1 ? '' : Array(n)
    .fill(0)
    .map((_, i) => Array(n - i)
        .fill(0)
        .reduce((acc, _, idx) => acc + (n - idx), ''))
    .join('\n');

/*
Instructions:

Task:
You have to write a function pattern which returns the following Pattern (See Pattern & Examples) upto n number of rows.

Note: Returning the pattern is not the same as Printing the pattern.
Rules/Note:
If n < 1 then it should return "" i.e. empty string.
There are no whitespaces in the pattern.
Pattern:
(n)(n-1)(n-2)...4321
(n)(n-1)(n-2)...432
(n)(n-1)(n-2)...43
(n)(n-1)(n-2)...4
...............
..............
(n)(n-1)(n-2)
(n)(n-1)
(n)
*/

/*
Samples:

const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(pattern(1),"1");
Test.assertEquals(pattern(2),"21\n2");
Test.assertEquals(pattern(5),"54321\n5432\n543\n54\n5");
  });
});
*/