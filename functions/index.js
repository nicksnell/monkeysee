'use strict';

const functions = require('firebase-functions');
const ActionsSdkApp = require('actions-on-google').ActionsSdkApp;

const NO_INPUTS = [
  'I didn\'t hear that.',
  'If you\'re still there, say that again.',
  'We can stop here. See you soon.'
];

exports.monkeyAppResponder = functions.https.onRequest((request, response) => {
	const app = new ActionsSdkApp({request, response});

  	function responseHandler (app) {
		let intent = app.getIntent();
		switch (intent) {
			case app.StandardIntents.MAIN:
		  		app.ask("Hey, say a number and I'll repeat it.");
		  		break;

			case app.StandardIntents.TEXT:
		  		let number = app.getRawInput();
		  		app.tell('You said ' + number);
		  		break;
		}
	}

	app.handleRequest(responseHandler);
});
