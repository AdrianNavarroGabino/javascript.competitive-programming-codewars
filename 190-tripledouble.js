const tripledouble = (num1, num2) => {
    const number = num1
        .toString()
        .split('')
        .filter((n, i, arr) => i < arr.length - 2 && n === arr[i + 1] && n === arr[i + 2]);
    
    return number.length && num2
        .toString()
        .split('')
        .some((n, i, arr) => i < arr.length - 1 && number.includes(n) && n === arr[i + 1]) ? 1 : 0;
}

/*
Instructions:

Write a function

tripledouble(num1,num2)
which takes numbers num1 and num2 and returns 1 if there is a straight triple of a number at any place in num1 and also a straight double of the same number in num2.

If this isn't the case, return 0

Examples
tripledouble(451999277, 41177722899) == 1 // num1 has straight triple 999s and 
                                          // num2 has straight double 99s

tripledouble(1222345, 12345) == 0 // num1 has straight triple 2s but num2 has only a single 2

tripledouble(12345, 12345) == 0

tripledouble(666789, 12345667) == 1
*/

/*
Samples:

describe('Initial Tests',() =>{
  Test.assertEquals(tripledouble(451999277,41177722899),1);
  Test.assertEquals(tripledouble(1222345, 12345),0);
  Test.assertEquals(tripledouble(12345, 12345),0);
  Test.assertEquals(tripledouble(666789, 12345667),1);
  Test.assertEquals(tripledouble(10560002, 100),1);
  Test.assertEquals(tripledouble(1112, 122),0);
});
*/