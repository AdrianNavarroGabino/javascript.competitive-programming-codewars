const minSum = (arr) => {
    let res = 0;

    arr.sort((a, b) => a - b);

    for(let i = 0; i < arr.length / 2; i++) {
        res += arr[i] * arr[arr.length - 1 - i];
    }
    return res;
}

/*
Instructions:

Introduction and Warm-up (Highly recommended)
Playing With Lists/Arrays Series
Task
Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

Notes
Array/list will contain positives only .
Array/list will always have even size
Input >> Output Examples
minSum({5,4,2,3}) ==> return (22) 
Explanation:
The minimum sum obtained from summing each two integers product ,  5*2 + 3*4 = 22
*/

/*
Samples:

const Test = require('@codewars/test-compat');

describe("Basic Tests", function(){
  it("should return the minimum sum", function(){
    Test.assertEquals(minSum([5,4,2,3]), 22);
    Test.assertEquals(minSum([12,6,10,26,3,24]), 342);
    Test.assertEquals(minSum([9,2,8,7,5,4,0,6]), 74);
  });
});
*/