/*var jsdom = require("jsdom");

function winning() {
  // This is the function under test. Put it somewhere that makes sense and "require" it here
  document.getElementById("booya").innerHTML = "so cool";
}

describe("FooFighters", function() {
  beforeEach(function() {
    // make a fake DOM to interact with
    const dom = new jsdom.JSDOM('<div id="booya" class="memory-card flip" style="order: 5;"><img class="back" src="Images/logo.png" id="logo" alt="logo"><img class="front" src="Images/1.jpeg" alt="car1"></div>');
    global.document = dom.window.document;
    global.window = dom.window;
    global.navigator = dom.window.navigator;
  });

  it("updates dom", function() {
    // expect(global.document.getElementById("booya").innerHTML).toBe("initial");
    flipCard(); // call the function that updates the dom
    expect(global.document.getElementById("booya").style.display).not.toBe("none");
  });
});
*/
