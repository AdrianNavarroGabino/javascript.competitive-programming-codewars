const replace = (s) => s.replace(/[aeiou]/gi, '!');

/*
Instructions:

Description:
Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

Examples
replace("Hi!") === "H!!"
replace("!Hi! Hi!") === "!H!! H!!"
replace("aeiou") === "!!!!!"
replace("ABCDE") === "!BCD!"
*/

/*
Samples:

const Test = require('@codewars/test-compat');

describe("Basic Tests", function(){
  it("It should works for basic tests", function(){

Test.assertSimilar(replace("Hi!") , "H!!")
Test.assertSimilar(replace("!Hi! Hi!") , "!H!! H!!")
Test.assertSimilar(replace("aeiou") , "!!!!!")
Test.assertSimilar(replace("ABCDE") , "!BCD!")

})})
*/