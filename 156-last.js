const last = (xs) => xs.length > 0 ? xs[xs.length - 1] : null;

/*
Instructions:

Write a function last that accepts a list and returns the last element in the list.

If the list is empty:

In languages that have a built-in option or result type (like OCaml or Haskell), return an empty option

In languages that do not have an empty option, just return null
*/

/*
Samples:

describe("last", function(){
  it("should work with non-empty lists", function(){
    Test.assertEquals( last([1,2,3]), 3, "last([1,2,3]) == 3");
  });
  it("should work with empty lists", function(){
    Test.assertEquals( last([]), null, "last( [] ) == null");
  });
});
*/