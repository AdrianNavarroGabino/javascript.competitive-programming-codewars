const bmi = (weight, height) => {
    const bodyMassIndex = weight / height / height;

    if(bodyMassIndex <= 18.5) {
        return 'Underweight';
    }
    if(bodyMassIndex <= 25) {
        return 'Normal';
    }
    if(bodyMassIndex <= 30) {
        return 'Overweight';
    }
    return 'Obese';
}

/*
Instructions:

Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"
*/

/*
Sample Tests:

const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(bmi(80, 1.80), "Normal");
  });
});
*/