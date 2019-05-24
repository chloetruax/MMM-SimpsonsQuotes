/* global Module */
/* Magic Mirror
 * Module: MM Simpsons Quotes
 *
 * By Mike Truax
 * MIT Licensed.
 */

Module.register("MMM-SimpsonsQuotes", {

	// Default module config.
	defaults: {
		updateTime: 120000, 
		showCharacterImage: true 
	},
	quoteObject: null, 

	// Define start sequence.
	start: function () {
		Log.info("Starting module:" + this.name);
		if (!config.updateTime) {
			config.updateTime = this.defaults.updateTime;
		}
		if (!config.showCharacter) {
			config.showCharacter = this.defaults.showCharacter;
		}
		this.getQuote();
		let self = this;
		setInterval(function(){self.getQuote()}, this.config.updateTime);
	},
	getStyles: function () {
		return ["MMM-SimpsonsQuotes.css"];
	},

	getQuote: function () {
		let self = this;
		fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
			.then(res => res.json())
			.then(quote => {
				self.quoteObject = quote[0];
				self.updateDom()
			})
	},
	// Override dom generator.
	getDom: function () {
		let wrapper = document.createElement("div");
		wrapper.classList.add("simpsonsQuotesContainer")
		if(!this.quoteObject){
			return wrapper;
		}
		Log.info(this.quoteObject);
		if(this.config.showCharacterImage){
			wrapper.appendChild(this.createElement("img", "simpsonsQuotes-charImage", this.quoteObject.image))
		}
		wrapper.appendChild(this.createElement("div", "simpsonsQuotes-quote",this.quoteObject.quote))
		wrapper.appendChild(this.createElement("div", "simpsonsQuotes-credit","- " + this.quoteObject.character))
		return wrapper;
	},
	createElement(el, className, text){
		let element = document.createElement(el);
		element.classList.add(className);
		if(el == "img"){
			element.src= text
		}
		else{
		element.innerText = text
		}
		return element;
	}
});