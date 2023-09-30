const mainDiagonalProduct = (mat) => mat.reduce((acc, curr, i) => acc * curr[i], 1);

/*
Instructions:

Given a list of rows of a square matrix, find the product of the main diagonal.

Examples:

mainDiagonalProduct([[1,0],[0,1]]) => 1

mainDiagonalProduct([[1,2,3],[4,5,6],[7,8,9]]) => 45
http://en.wikipedia.org/wiki/Main_diagonal
*/

/*
Samples:

arr1 = [[1,0],[0,1]]
arr2 = [[1,2,3],[4,5,6],[7,8,9]]

describe("Main diagonal products :", function(){

  console.log(Test.inspect(arr1));
  Test.assertEquals(mainDiagonalProduct(arr1), 1);

  console.log(Test.inspect(arr2));
  Test.assertEquals(mainDiagonalProduct(arr2), 45);
  
})
*/