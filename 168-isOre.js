const getDivisors = (n) => {
    let result = [1];
    for(let i = 2; i <= n; i++) {
        if(n % i === 0) {
            result.push(i);
        }
    }
    return result;
}

const isOre = (n) => {
    const divisors = getDivisors(n);
    console.log(divisors)
    const ore = divisors.length / divisors.reduce((acc, curr) => acc + 1 / curr, 0);
    console.log(ore)
    return ore - Math.floor(ore) < 0.00001;
}

/*
Instructions:

Ore Numbers (also called Harmonic Divisor Numbers) are numbers for which the harmonic mean of all their divisors (including the number itself) equals an integer.

For example, 6 is an Ore Number because its harmonic mean is exactly 2:

H(6) = 4 / (1/1 + 1/2 + 1/3 + 1/6) = 2
Your task is to complete the function returns true if the given number is an Ore Number and false otherwise.

You can assume all inputs will be valid positive integers.

Hint: The harmonic mean is the total number of divisors divided by the sum of their reciprocals.
*/

/*
Samples:

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(isOre(6), true)
Test.assertEquals(isOre(10), false)
Test.assertEquals(isOre(28), true)
Test.assertEquals(isOre(32), false)
  });
});
*/