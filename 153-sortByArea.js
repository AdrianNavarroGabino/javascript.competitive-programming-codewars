const sortByArea = (array) => [...array].sort((a, b) => {
    areaA = typeof a === 'number' ? Math.PI * a * a : a[0] * a[1];
    areaB = typeof b === 'number' ? Math.PI * b * b : b[0] * b[1];
    return areaA - areaB;
});

/*
Instructions:

In this kata you will be given a sequence of the dimensions of rectangles ( sequence with width and length ) and circles ( radius - just a number ).
Your task is to return a new sequence of dimensions, sorted ascending by area.

For example,

const array = [ [4.23, 6.43], 1.23, 3.444, [1.342, 3.212] ]; // [ rectangle, circle, circle, rectangle ]
sortByArea(array) => [ [ 1.342, 3.212 ], 1.23, [ 4.23, 6.43 ], 3.444 ]
*/

/*
Samples:

const {assert,config} = require("chai"); config.truncateThreshold = 0;

describe("Sort by area",()=>{
  it("Example tests",()=>{  
    assert.deepEqual( sortByArea([ [4.23, 6.43], 1.23, 3.444, [1.342, 3.212] ]), [ [1.342, 3.212], 1.23, [4.23, 6.43], 3.444 ] );
    assert.deepEqual( sortByArea([ [2, 5], 6 ]), [ [2, 5], 6 ]);
    assert.deepEqual( sortByArea([]), [] );
  });
});
*/