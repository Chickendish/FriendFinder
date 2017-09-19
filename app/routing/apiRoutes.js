//Dependencies
var friendsArray = require("../data/friends.js");
//var questionsArray = require("../data/questions.js");
//var Friend = require("../public/js/logic.js");

module.exports = function(app){

	app.get("/api/questions", function(request, response){
		response.json(questionsArray);
	});

	app.get("/api/friends", function(request, response){
		response.json(friendsArray);
	});

	app.post("/api/friends", function(request, response){
		// //Add new user object
		var incoming = request.body;
		var friendObj = new Friend (incoming.name, incoming.photoURL, incoming.scores);
		console.log("friendObj: " + JSON.stringify(friendObj, null, 2));

		//run totalDifference(
		friendObj.totalDifference();
		console.log("friendObj.bestMatch: " + friendObj.bestMatch);

		//Push new user to friendsArray
		friendsArray.push(friendObj);

		//Send back the matched user
		response.json(friendObj.bestMatch);
	});
}
