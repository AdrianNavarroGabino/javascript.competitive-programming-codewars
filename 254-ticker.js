const ticker = (text, width, tick) => (
    tick %= (width + text.length),
    text = text
    .substring(width > tick ? 0 : tick - width, tick),
    text
    .padStart(tick < width ? text.length + width - tick : 0, ' ')
    .padEnd(tick > text.length ? width : 0, ' '));

/*
Instructions:

While using public transport we could see simple displays with a ticker. It often provides information about next stations and expected arrival time.

Let's implement a function which will return a chunk of text to be displayed on a display of fixed width. The function should take text to display, width of the display and tick as a step of the ticker. The function will be called many times with tick parameter constantly incrementing.

At very beginning the display is empty. At first step only one character should be displayed in the most right position and so on. When the message is displayed, it should be dissapear char by char to left position and return to blank state of the display. After that cycle should start again.

For example

ticker('Hello world!', 10, 4)   // '      Hell'
We could expect that our function will be called from simple script like this one

const demo = (text, width) => {
  let tick = 0;
  setInterval(_ => {
    someDisplayFunction(ticker(text, width, tick));
    tick++ 
  }, 100);
}
*/

/*
Samples:

describe("Ticker", () => {
  it("Should be empty display as initial state", () => {
    Test.assertEquals(ticker('Beautiful is better than ugly.', 10, 0), '          ')
  })
  it("Should show line from right side", () => {
    Test.assertEquals(ticker('Beautiful is better than ugly.', 10, 5), '     Beaut')
    Test.assertEquals(ticker('Beautiful is better than ugly.', 10, 30), 'than ugly.')
  })
  it("Should fill window with spaces from right side", () => {
    Test.assertEquals(ticker('Beautiful is better than ugly.', 10, 39), '.         ')
  })
  it("Should work in cycle", () => {
    Test.assertEquals(ticker('Beautiful is better than ugly.', 10, 41), '         B')
  })
})
*/