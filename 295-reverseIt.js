const reverseIt = (data) => typeof data === 'string' ?
    Array.from(data).reverse().join('') :
    (typeof data === 'number' ?
        +Array.from(data.toString()).reverse().join('') : data);

/*
Instructions:

You have to create a function named reverseIt.

Write your function so that in the case a string or a number is passed in as the data , you will return the data in reverse order. If the data is any other type, return it as it is.

Examples of inputs and subsequent outputs:

"Hello" -> "olleH"

"314159" -> "951413"

[1,2,3] -> [1,2,3]
*/

/*
Samples:

describe("Tests", () => {
  it("test", () => {
Test.assertSimilar(reverseIt('Hello'), "olleH", 'Not quite')
Test.assertSimilar(reverseIt(314159), 951413, 'Not quite')
Test.assertSimilar(reverseIt("314159"), "951413", 'Not quite')
Test.assertSimilar(reverseIt([]), [], 'Not quite')
  });
});
*/