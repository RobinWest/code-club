"use strict";

var count = 0;

function logSomething(){
	if(count < 6)
		console.log('You are seeing this because app.js has been loaded correctly. Nice!');

	if(count >= 6 && count < 18)
		console.log('Alright chill now...');

	if(count >= 18)
		console.log('I said chill, this is the last one. Seriously.');

	count++;
};
