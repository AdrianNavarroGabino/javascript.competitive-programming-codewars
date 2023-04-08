const expandedForm = (num) => (num + '')
    .split('')
    .reverse()
    .map((n, i) => parseInt(n) * Math.pow(10, i))
    .reverse()
    .join(' + ')
    .replace(/ \+ 0/g, '');

/*
Instructions:

Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.
*/

/*
Samples:

const { assert } = require('chai');

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(expandedForm(12), '10 + 2');
    assert.strictEqual(expandedForm(42), '40 + 2');
    assert.strictEqual(expandedForm(70304), '70000 + 300 + 4');
  });
});
*/