const solution = (input, markers) => input.split('\n').map(l => l.replace(new RegExp(`[\\${markers.join('\\')}].*`), '').trim()).join('\n');

/*
Instructions:

Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

Example:

Given an input string of:

apples, pears # and bananas
grapes
bananas !apples
The output expected would be:

apples, pears
grapes
bananas
The code would be called like so:

var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// result should == "apples, pears\ngrapes\nbananas"
*/

/*
Samples:

const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
function checkComments(input, markers, expected) {
  var actual;
  actual = solution(input, markers);
  return Test.expect(actual === expected, "Returned '" + actual + "' but expected '" + expected + "'");
};

checkComments("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"], "apples, plums\npears\noranges")
checkComments("Q @b\nu\ne -e f g", ["@", "-"], "Q\nu\ne")
});
});
*/