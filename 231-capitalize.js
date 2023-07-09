const capitalize = (s) => s.split('').reduce((acc, curr, i) => {
    acc[0] += i % 2 ? curr.toLowerCase() : curr.toUpperCase();
    acc[1] += i % 2 ? curr.toUpperCase() : curr.toLowerCase();
    return acc;
}, ['', '']);

/*
Instructions:

Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

Good luck!

If you like this Kata, please try:

Indexed capitalization

Even-odd disparity
*/

/*
Samples:

describe("Basic tests", function(){
Test.assertDeepEquals(capitalize("abcdef"),['AbCdEf', 'aBcDeF']);
Test.assertDeepEquals(capitalize("codewars"),['CoDeWaRs', 'cOdEwArS']);
Test.assertDeepEquals(capitalize("abracadabra"),['AbRaCaDaBrA', 'aBrAcAdAbRa']);
Test.assertDeepEquals(capitalize("codewarriors"),['CoDeWaRrIoRs', 'cOdEwArRiOrS']);
});
*/