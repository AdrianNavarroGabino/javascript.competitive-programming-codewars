const span = (arr, predicate) => arr.reduce((acc, curr) => {
    if(predicate(curr) && !acc[1].length) {
        acc[0].push(curr);
    } else {
        acc[1].push(curr);
    }
    return acc;
}, [[], []]);

/*
Instructions:

The span function is a good one to know. It accepts a sequence and a predicate function and returns two sequences. The first sequence contains all the elements of the argument sequence up to the item that caused the first failure of the predicate. The second returned sequence contains the rest of the original sequence. The original sequence is not modified.

For example,


function isEven (x) {
  return Math.abs(x) % 2 === 0;
}

var arr = [2,4,6,1,8,10];

// This is true
span(arr, isEven) === [[2,4,6],[1,8,10]]
Your task is to...wait for it... write your own span function !!!

Hint/Challenge: If you have completed the takeWhile function and the dropWhile function, then you can solve this problem in one line!
*/

/*
Samples:

const Test = require('@codewars/test-compat');

describe("The Span Function", function () {
  
  // Functions for use in tests
  function isEven(x) {
    return Math.abs(x) % 2 === 0;
  }
  
  function isOdd(x) {
    return Math.abs(x) % 2 !== 0;
  }
  
  // Arrays for use in tests
  var arr1 = [2,4,6,1,4,8];
  var arr2 = [1,4,5,7,6];
  var arr3 = [13,17,19,11,21];
  
  it("should be defined", function () {
    function tr() { return true; }
    
    Test.assertSimilar(span([], tr), [[], []]);
  });
  
  it("should work when testing for even numbers", function () {
    Test.assertSimilar(span(arr1, isEven), [[2,4,6],[1,4,8]]);
  });
  
  it("should work when the first element results in false", function () {
    Test.assertSimilar(span(arr2, isEven), [[], arr2]);
  });
  
  it("should work when no element results in false", function () {
    Test.assertSimilar(span(arr3, isOdd), [arr3,[]]);
  });

});
*/