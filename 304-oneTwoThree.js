const oneTwoThree = (n) => (
    nines = Math.floor(n / 9),
    nineModule = n % 9,
    [
        Array(nines).fill(9).join('') + ((nineModule || !nines) ? nineModule : '').toString(),
        Array(n).fill(1).join('') || '0'
    ]
);

/*
Instructions:

There are no explanations. You have to create the code that gives the following results in Python, Ruby, and Haskell:

one_two_three(0) == [0, 0]
one_two_three(1) == [1, 1]
one_two_three(2) == [2, 11]
one_two_three(3) == [3, 111]
one_two_three(19) == [991, 1111111111111111111]
And it should give the following results in Javascript, Scala, D, Go, and Rust:

oneTwoThree(0) == ['0', '0']
oneTwoThree(1) == ['1', '1']
oneTwoThree(3) == ['3', '111']
oneTwoThree(19) == ['991', '1111111111111111111']
In C, the results are to be assigned to seperate pointers.
*/

/*
Samples:

const { assert, config } = require('chai');
config.truncateThreshold = 0;

describe('Tests', () => {
  const test = (input, expected) => {
    assert.deepEqual(oneTwoThree(input), expected, `Test failed for input (n = ${input})`);
  };

  it('Sample Tests', () => {
    const tests = [
      [0,  ['0', '0']],
      [1,  ['1', '1']],
      [2,  ['2', '11']],
      [3,  ['3', '111']],
      [19, ['991', '1111111111111111111']],
    ];
    for (const [input, expected] of tests) {
      test(input, expected);
    }
  });
});
*/