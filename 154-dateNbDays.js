const dateNbDays = (a0, a, p) => {
    p /= 36000;
    const date = new Date(2016, 0, 1);
    let days = 0;

    while(a0 < a) {
        a0 *= (1 + p);
        days++;
    }
    date.setDate(date.getDate() + days);
    return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
}

/*
Instructions:

You have an amount of money a0 > 0 and you deposit it with an interest rate of p percent divided by 360 per day on the 1st of January 2016. You want to have an amount a >= a0.

Task:
The function date_nb_days (or dateNbDays...) with parameters a0, a, p will return, as a string, the date on which you have just reached a.

Example:
date_nb_days(100, 101, 0.98) --> "2017-01-01" (366 days)

date_nb_days(100, 150, 2.00) --> "2035-12-26" (7299 days)

Notes:
The return format of the date is "YYYY-MM-DD"
The deposit is always on the "2016-01-01"
Don't forget to take the rate for a day to be p divided by 36000 since banks consider that there are 360 days in a year.
You have: a0 > 0, p% > 0, a >= a0
*/

/*
Samples:

const Test = require('@codewars/test-compat');

function testing(actual, expected) {
    Test.assertEquals(actual, expected)
}

describe("dateNbDays",function() {
it("Basic tests",function() { 
    testing(dateNbDays(4281, 5087, 2), "2024-07-03");
    testing(dateNbDays(4620, 5188, 2), "2021-09-19");
    testing(dateNbDays(9999, 11427, 6), "2018-03-13");
    testing(dateNbDays(3525, 4822, 3), "2026-04-18");
    testing(dateNbDays(5923, 6465, 6), "2017-06-10");
    testing(dateNbDays(4254, 4761, 8), "2017-05-22");
    testing(dateNbDays(1244, 2566, 4), "2033-11-04");
    testing(dateNbDays(6328, 7517, 5), "2019-05-25");
    testing(dateNbDays(2920, 3834, 2), "2029-06-03");
    testing(dateNbDays(7792, 8987, 4), "2019-07-09");
})})
*/