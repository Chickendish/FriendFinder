// ==============================================================================
//Dependencies
// ==============================================================================
var express = require ("express");
var bodyParser = require ("body-parser");
var path = require ("path");

// ==============================================================================
// EXPRESS CONFIGURATION
// ==============================================================================
// Tells node that we are creating an "express" server
var app = express();

// BodyParser makes it possible for our server to interpret data sent to it.
// The code below is pretty standard.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//Routing
var PORT = 3000;

// require('./app/routing/apiRoutes.js'); 
// require('./app/routing/htmlRoutes.js');

//Listener
app.listen(PORT, function(){
	console.log("listening on port " + PORT);
});
