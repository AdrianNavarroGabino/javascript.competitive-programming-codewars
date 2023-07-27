const adjacentElementsProduct = (array) => Math.max(...array.map((e, i, arr) => i === 0 ? e * arr[1] : e * arr[i - 1]));

/*
Instructions:

Task
Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

Notes
Array/list size is at least 2.

Array/list numbers could be a mixture of positives, negatives also zeroes .
*/

/*
Samples:

describe("Positive numbers", function() {
  Test.assertEquals(adjacentElementsProduct([5, 8]), 40);
  Test.assertEquals(adjacentElementsProduct([1, 2, 3]), 6);
  Test.assertEquals(adjacentElementsProduct([1, 5, 10, 9]), 90);
  Test.assertEquals(adjacentElementsProduct([4, 12, 3, 1, 5]), 48);
  Test.assertEquals(adjacentElementsProduct([5, 1, 2, 3, 1, 4]), 6);
});

describe("Both positive and negative values", function() {
  Test.assertEquals(adjacentElementsProduct([3, 6, -2, -5, 7, 3]), 21);
  Test.assertEquals(adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]), 50);
  Test.assertEquals(adjacentElementsProduct([5, 6, -4, 2, 3, 2, -23]), 30);
  Test.assertEquals(adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921]), -14);
  Test.assertEquals(adjacentElementsProduct([5, 1, 2, 3, 1, 4]), 6);
});

describe("Contains zeroes", function() {
  Test.assertEquals(adjacentElementsProduct([1, 0, 1, 0, 1000]), 0);
  Test.assertEquals(adjacentElementsProduct([1, 2, 3, 0]), 6);
});
*/