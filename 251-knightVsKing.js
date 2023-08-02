const knightVsKing = (knightPosition, kingPosition) => {
    knightPosition[1] = knightPosition[1].charCodeAt(0) - 64;
    kingPosition[1] = kingPosition[1].charCodeAt(0) - 64;

    const y = Math.abs(kingPosition[0] - knightPosition[0]);
    const x = Math.abs(kingPosition[1] - knightPosition[1]);

    if((x === 1 && y === 2) || (x === 2 && y === 1)) {
        return 'Knight';
    } else if((x === 0 || x === 1) && (y === 0 || y === 1)) {
        return 'King';
    } else {
        return 'None';
    }
}

/*
Instructions:

Knight vs King
If you are not familiar with chess game you can learn more Here .

Here is the chess board (rows, denoted by numbers, are called ranks, columns, denoted by a letter, are called files):

alt text

You put a Knight and a King in the board.

Complete the method that tell us which one can capture the other one.

You are provided with two object array; each contains an integer (the rank, first item) and a string/char (the file, second item) to show the position of the pieces in the chess board.

Return:

"Knight" if the knight is putting the king in check,
"King" if the king is attacking the knight
"None" if none of the above occur
Example:

knight = [7, "B"], king = [6, "C"]  ---> "King"

Check the test cases and Happy coding :)
*/

/*
Samples:

const { strictEqual } = require('chai').assert;

function doTest (knight, king, expected) {
    const log = `for knight = ${JSON.stringify(knight)} and king = ${JSON.stringify(king)}\n`;
    const actual = knightVsKing(knight, king);
    strictEqual(actual, expected, log);
}

describe("knightVsKing", function() {
    it("works for some examples", function() {
        doTest([4, "C"], [6, "D"], "Knight");
        doTest([7, "B"], [6, "C"], "King");
        doTest([2, "F"], [6, "B"], "None");
    });
});
*/