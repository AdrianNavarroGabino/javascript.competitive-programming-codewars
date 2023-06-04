const parse = (data) => data.split('').reduce((acc, curr, idx, array) => {
    switch(curr) {
        case 'i':
            acc[acc.length - 1]++;
            break;
        case 'd':
            acc[acc.length - 1]--;
            break;
        case 's':
            acc[acc.length - 1] = Math.pow(acc[acc.length - 1], 2);
            break;
        case 'o':
            if(idx !== array.length - 1) {
                acc.push(acc[acc.length - 1]);
            }
            break;
    }

    return acc;
}, [0]);

/*
Instructions:

Write a simple parser that will parse and run Deadfish.

Deadfish has 4 commands, each 1 character long:

i increments the value (initially 0)
d decrements the value
s squares the value
o outputs the value into the return array
Invalid characters should be ignored.

parse("iiisdoso") => [ 8, 64 ]
*/

/*
Samples:

describe("Tests", () => {
  it("test", () => {
Test.assertDeepEquals( parse("iiisdoso"), [ 8, 64 ] );
Test.assertDeepEquals( parse("iiisxxxdoso"), [ 8, 64 ] );
});
});
*/