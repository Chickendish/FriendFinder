// ==============================================================================
//Dependencies
// ==============================================================================
var express = require ("express");
var bodyParser = require ("body-parser");
var path = require("path");

// ==============================================================================
// Express configuration and middleware
// ==============================================================================
// 
var app = express();

// BodyParser makes it possible for our server to interpret data sent to it.

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// ==============================================================================
//Routing
// ==============================================================================
var PORT = process.env.PORT || 3000;


//require('./app/routing/apiRoutes.js'); 
require('./app/routing/htmlRoutes.js')(app)

//Listener
app.listen(PORT, function(){
	console.log("listening on port " + PORT);
});
