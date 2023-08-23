const to24hourtime = (hour, minute, period) => (
    period = hour === 12 ? {'am': 'pm', 'pm': 'am'}[period] : period,
    `${period === 'am' ? hour.toString().padStart(2, '0') : ((hour + 12) % 24).toString().padStart(2, '0')}${minute.toString().padStart(2, '0')}`
    );

/*
Instructions:

Converting a 12-hour time like "8:30 am" or "8:30 pm" to 24-hour time (like "0830" or "2030") sounds easy enough, right? Well, let's see if you can do it!

You will have to define a function, which will be given an hour (always in the range of 1 to 12, inclusive), a minute (always in the range of 0 to 59, inclusive), and a period (either "am" or "pm") as input.

Your task is to return a four-digit string that encodes that time in 24-hour time.

Notes
By convention, noon is 12:00 pm, and midnight is 12:00 am.
On 12-hours clock, there is no 0 hour, and time just after midnight is denoted as, for example, 12:15 am. On 24-hour clock, this translates to 0015.
*/

/*
Samples:

const { assert } = require("chai");

describe("Test cases", () => {
  it("Example tests", () => {
    assert.strictEqual(to24hourtime( 1,  0, "am"), "0100", "Input =  1:00 am");
    assert.strictEqual(to24hourtime( 1,  0, "pm"), "1300", "Input =  1:00 pm");
    assert.strictEqual(to24hourtime(12,  0, "am"), "0000", "Input = 12:00 am");
    assert.strictEqual(to24hourtime(12,  0, "pm"), "1200", "Input = 12:00 pm");
    assert.strictEqual(to24hourtime( 6, 30, "am"), "0630", "Input =  6:30 am");
    assert.strictEqual(to24hourtime( 9, 45, "pm"), "2145", "Input =  9:45 pm");
  });
});
*/