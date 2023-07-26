const orderedCount = (text) => {
    const jsonText = [...text].reduce((acc, curr) => {
        if (!acc[curr]) {
            acc[curr] = 0;
        }

        acc[curr]++;
        return acc;
    }, {});

    const result = [];

    for(let key of [...new Set([...text])]) {
        result.push([key, jsonText[key]]);
    }

    return result;
}

/*
Instructions:

Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).

Consult the solution set-up for the exact data structure implementation depending on your language.

Example:

orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
*/

/*
Samples:

const chai = require('chai');
const assert = chai.assert;
chai.config.truncateThreshold = 0;

const examples = [
    ["abracadabra", [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]],
    ["Code Wars",  [['C', 1], ['o', 1], ['d', 1], ['e', 1], [' ', 1], ['W', 1], ['a', 1], ['r', 1], ['s', 1]]],
    ["233312", [['2', 2], ['3', 3], ['1', 1 ]]],
];

describe("Sample Tests", function(){
    for (const [text, expected] of examples) {
        it('text: ' + JSON.stringify(text), function() {
            assert.deepEqual(orderedCount(text), expected);
        });
    }
});
*/