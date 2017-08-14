//Dependencies
var path = require("path")

module.exports = function(app){
	app.get("/survey", function (request, response) {
		response.sendFile(path.join(__dirname, "/../../app/public/survey.html"));
	});

	app.use("/", function(request, response){
		response.sendFile(path.join(__dirname, "/../../app/public/home.html"));
	});
}
