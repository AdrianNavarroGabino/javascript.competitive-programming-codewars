const AmIAfraid = (day, n) => ({
    'Monday': n === 12,
    'Tuesday': n > 95,
    'Wednesday': n === 34,
    'Thursday': n === 0,
    'Friday': !(n % 2),
    'Saturday': n === 56,
    'Sunday': Math.abs(n) === 666,
})[day];

/*
Instructions:

I've got a crazy mental illness. I dislike numbers a lot. But it's a little complicated: The number I'm afraid of depends on which day of the week it is... This is a concrete description of my mental illness:

Monday --> 12

Tuesday --> numbers greater than 95

Wednesday --> 34

Thursday --> 0

Friday --> numbers divisible by 2

Saturday --> 56

Sunday --> 666 or -666

Write a function which takes a string (day of the week) and an integer (number to be tested) so it tells the doctor if I'm afraid or not. (return a boolean)
*/

/*
Samples:

describe('Fixed Tests', () => {
  Test.assertEquals(AmIAfraid("Monday", 13), false, 'Should return false');
  Test.assertEquals(AmIAfraid("Sunday", -666), true, 'Should return true');
  Test.assertEquals(AmIAfraid("Tuesday", 2), false, 'Should return false');
  Test.assertEquals(AmIAfraid("Tuesday", 965), true, 'Should return true');
  Test.assertEquals(AmIAfraid("Friday", 2), true, 'Should return true');
});
*/