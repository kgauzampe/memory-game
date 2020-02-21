describe('memory game specs',function () {
	const html = require('../src/script')
	const jsdom = require('jsdom')
	const {JSDOM} = jsdom;

	// using jsDom's VirtualConsole method
	const virtualConsole = new jsdom.VirtualConsole();
	
	// and telling it to use the default nodejs console. 
	virtualConsole.sendTo(console);
	
	// this function simulates a click on one of the game tiles.
	const clickSimulator = (arg)=>{
		let event = new dom.window.MouseEvent('click', {
			view: dom.window,
			bubbles: true,
			cancelable: false
		})

		// let element = document.getElementsByTagName('LI')[arg];
		// element.dispatchEvent(event);
	};

	beforeEach(()=>{

		dom = new JSDOM(html,{
        	// enabling jsDom to run scripts and use external
        	// resource via i.e <link>, <script>, <img>, etc
        	runScripts: "dangerously",
        	resources: "usable"
      	});
		document = dom.window.document;
		game = require("../src/script");
		
	})

	afterEach(()=>{
		delete require.cache[require.resolve('../src/script')]
	})


	it('game must have 12 cards', function()  {
		expect(script.cards.length).toEqual(12)
	});

	it('check if cards match', function() {
    expect(script.cards.match).toEqual(True) 
  });
  
  it('check if cards Shuffle after each game', function()  {
    expect(script.cards.shuffle).toEqual(True)
	});
});