const toUnderScore = (name) => name
    .replace(/([^_\d])([A-Z\d])/g, '$1_$2')
    .replace(/([A-Z\d])([A-Z])/g, '$1_$2')
    .replace(/([A-Za-z])(\d)/g, '$1_$2');

/*
Instructions:

You wrote all your unit test names in camelCase. But some of your colleagues have troubles reading these long test names. So you make a compromise to switch to underscore separation.

To make these changes fast you wrote a class to translate a camelCase name into an underscore separated name.

Implement the ToUnderscore() method.

Example:

"ThisIsAUnitTest" => "This_Is_A_Unit_Test"

But of course there are always special cases...

You also have some calculation tests. Make sure the results don't get split by underscores. So only add an underscore in front of the first number.

Also Some people already used underscore names in their tests. You don't want to change them. But if they are not split correct you should adjust them.

Some of your colleagues mark their tests with a leading and trailing underscore. Don't remove this.

And of course you should handle empty strings to avoid unnecessary errors. Just return an empty string then.

Example:

"Calculate15Plus5Equals20" => "Calculate_15_Plus_5_Equals_20"

"This_Is_Already_Split_Correct" => "This_Is_Already_Split_Correct"

"ThisIs_Not_SplitCorrect" => "This_Is_Not_Split_Correct"

"_UnderscoreMarked_Test_Name_" => _Underscore_Marked_Test_Name_"
*/

/*
Samples:

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Solution", () => {
  it("test_with_simple_names", () => {
    assert.strictEqual(toUnderScore("ThisIsAUnitTest"), "This_Is_A_Unit_Test");
    assert.strictEqual(toUnderScore("ThisShouldBeSplittedCorrectIntoUnderscore"), "This_Should_Be_Splitted_Correct_Into_Underscore");    
  });
  
  it("test_with_numbers", () => {
    assert.strictEqual(toUnderScore("Calculate1Plus1Equals2"), "Calculate_1_Plus_1_Equals_2");
    assert.strictEqual(toUnderScore("Calculate15Plus5Equals20"), "Calculate_15_Plus_5_Equals_20");
    assert.strictEqual(toUnderScore("Calculate500DividedBy5Equals100"), "Calculate_500_Divided_By_5_Equals_100");
  });
  
   it("test_with_special_cases", () => {
    assert.strictEqual(toUnderScore("This_Is_Already_Splitted_Correct"), "This_Is_Already_Splitted_Correct");
    assert.strictEqual(toUnderScore("ThisIs_Not_SplittedCorrect"), "This_Is_Not_Splitted_Correct");
    assert.strictEqual(toUnderScore("_IfATestStartAndEndsWithUnderscore_ItShouldBeTheSame_"), "_If_A_Test_Start_And_Ends_With_Underscore_It_Should_Be_The_Same_");
  });
});
*/