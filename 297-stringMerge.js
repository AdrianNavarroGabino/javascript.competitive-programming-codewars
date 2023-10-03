const stringMerge = (string1, string2, letter) => string1.substring(0, string1.indexOf(letter)) + string2.substring(string2.indexOf(letter));

/*
Instructions:

Given two words and a letter, return a single word that's a combination of both words, merged at the point where the given letter first appears in each word. The returned word should have the beginning of the first word and the ending of the second, with the dividing letter in the middle. You can assume both words will contain the dividing letter.

Examples
("hello", "world", "l")       ==>  "held"
("coding", "anywhere", "n")   ==>  "codinywhere"
("jason", "samson", "s")      ==>  "jasamson"
("wonderful", "people", "e")  ==>  "wondeople"
*/

/*
Samples:

describe( "String Merge Tests:", () => {

  Test.assertEquals(stringMerge("person","here", "e"), "pere");
  Test.assertEquals(stringMerge("apowiejfoiajsf","iwahfeijouh", "j"), "apowiejouh");
  Test.assertEquals(stringMerge("abcdefxxxyzz","abcxxxyyyxyzz", "x"), "abcdefxxxyyyxyzz");
  Test.assertEquals(stringMerge("12345654321","123456789", "6"), "123456789");
  Test.assertEquals(stringMerge("JiOdIdA4","oopopopoodddasdfdfsd", "d"), "JiOdddasdfdfsd");
  Test.assertEquals(stringMerge("incredible","people", "e"), "increople");

} );
*/