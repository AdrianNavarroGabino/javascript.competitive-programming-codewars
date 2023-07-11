const isSortedAndHow = (array) => [...array].sort((a, b) => a - b).toString() == array.toString() ? 'yes, ascending' :
    ([...array].sort((a, b) => b - a).toString() == array.toString() ? 'yes, descending': 'no');

/*
Instructions:

Complete the method which accepts an array of integers, and returns one of the following:

"yes, ascending" - if the numbers in the array are sorted in an ascending order
"yes, descending" - if the numbers in the array are sorted in a descending order
"no" - otherwise
You can assume the array will always be valid, and there will always be one correct answer.
*/

/*
Samples:

const Test = require('@codewars/test-compat');

describe("isSortedAndHow", function() {

  it("[1, 2]", function() {
    Test.assertEquals(isSortedAndHow([1, 2]), 'yes, ascending');
  });
  
  it("[15, 7, 3, -8]", function() {
    Test.assertEquals(isSortedAndHow([15, 7, 3, -8]), 'yes, descending');
  });
  
  it("[4, 2, 30]", function() {
    Test.assertEquals(isSortedAndHow([4, 2, 30]), 'no');
  });

});
*/