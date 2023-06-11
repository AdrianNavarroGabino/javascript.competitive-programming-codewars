const findMissing = (list) => {
    const diff = list.map((n, i) => i === 0 ? 0 : n - list[i - 1]).slice(1);
    const op = diff.filter(n => n !== diff[0]);

    if(op.length !== 1) {
        return list[0] + (list[1] - list[0]) / 2;
    } else if(list.length === 3) {
        if((list[1] - list[0]) / 2 === diff[1]) {
            return list[0] + (list[1] - list[0]) / 2;
        } else {
            return list[1] + (list[2] - list[1]) / 2;
        }
    } else {
        const diffIndex = diff.findIndex(n => n === op[0]);
        return list[diffIndex] + (list[diffIndex + 1] - list[diffIndex]) / 2;
    }
}

/*
Instructions:

An Arithmetic Progression is defined as one in which there is a constant difference between the consecutive terms of a given series of numbers. You are provided with consecutive elements of an Arithmetic Progression. There is however one hitch: exactly one term from the original series is missing from the set of numbers which have been given to you. The rest of the given series is the same as the original AP. Find the missing term.

You have to write a function that receives a list, list size will always be at least 3 numbers. The missing term will never be the first or last one.

Example
findMissing([1, 3, 5, 9, 11]) == 7
PS: This is a sample question of the facebook engineer challenge on interviewstreet. I found it quite fun to solve on paper using math, derive the algo that way. Have fun!
*/

/*
Samples:

fixture.random(10,0);
fixture.random(10,10);
fixture.random(10,100);
fixture.random(10,1000);
describe("Testing with [1, 3, 4]", function() {
  Test.assertEquals(findMissing([1, 3, 4]), 2);
});
*/