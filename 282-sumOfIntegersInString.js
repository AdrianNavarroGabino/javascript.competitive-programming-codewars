const sumOfIntegersInString = (s) => (s.match(/\d+/g) || [0]).reduce((acc, curr) => acc + Number(curr), 0);

/*
Instructions:

Your task in this kata is to implement a function that calculates the sum of the integers inside a string. For example, in the string "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", the sum of the integers is 3635.

Note: only positive integers will be tested.
*/

/*
Samples:

describe("Example test cases", () =>{

  let = exampleTests = [
    ["12.4", 16],
    ["h3ll0w0rld", 3],
    ["2 + 3 = ", 5],
    ["Our company made approximately 1 million in gross revenue last quarter.", 1],
    ["The Great Depression lasted from 1929 to 1939.", 3868],
    ["Dogs are our best friends.", 0],
    ["C4t5 are 4m4z1ng.", 18],
    ["The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", 3635]
  ]
  
  exampleTests.forEach( ([testString, correctAnswer]) => Test.assertEquals(sumOfIntegersInString(testString), correctAnswer ) )
});
*/