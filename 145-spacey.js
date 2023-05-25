const spacey = (array) => {
    let result = [];
    for(let word of array) {
        if(!result.length) {
            result.push(word);
        } else {
            result.push(result[result.length - 1] + word);
        }
    }
    return result;
}

/*
Instructions:

Kevin is noticing his space run out! Write a function that removes the spaces from the values and returns an array showing the space decreasing.
For example, running this function on the array ['i', 'have','no','space'] would produce ['i','ihave','ihaveno','ihavenospace']
*/

/*
Samples:

describe("Tests", () => {
  it("test", () => {
Test.assertSimilar(spacey(['kevin', 'has','no','space']), [ 'kevin', 'kevinhas', 'kevinhasno', 'kevinhasnospace']);
Test.assertSimilar(spacey(['this','cheese','has','no','holes']), ['this','thischeese','thischeesehas','thischeesehasno','thischeesehasnoholes']);
  });
});
*/