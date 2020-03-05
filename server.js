var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/flipcards_controller.js");

app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});


// require("./routes/htmlRoutes")(app);
=======

var http = require("https");

var options = {
	"method": "GET",
	"hostname": "numbersapi.p.rapidapi.com",
	"port": null,
	"path": "/random/trivia?max=20&fragment=true&min=10&json=true",
	"headers": {
		"x-rapidapi-host": "numbersapi.p.rapidapi.com",
		"x-rapidapi-key": "001df8cadcmsha73da3732d7cba9p10579bjsn40db637f4980"
	}
};

// var req = http.request(options, function (res) {
// 	var chunks = [];

// 	res.on("data", function (chunk) {
//     chunks.push(chunk);
//   });
  

// 	res.on("end", function () {
//     var body = Buffer.concat(chunks);
//     // console.log(body.toString());
//     var trivia = JSON.parse(body);

//     console.log(" ");
//     console.log("------------  Todays Trivia  -------------------------");
//     console.log("Question",trivia.text)
//     console.log("Answer",trivia.number)
//     console.log("-------------------------------------------------------");
// 	}); 
// });

// req.end();





var http = require("https");

var options = {
	"method": "GET",
	"hostname": "numbersapi.p.rapidapi.com",
	"port": null,
	"path": "/1729/math?fragment=true&json=true",
	"headers": {
		"x-rapidapi-host": "numbersapi.p.rapidapi.com",
		"x-rapidapi-key": "001df8cadcmsha73da3732d7cba9p10579bjsn40db637f4980"
	}
};


var req = http.request(options, function (res) {
	var chunks = [];

	res.on("data", function (chunk) {
		chunks.push(chunk);
	});

	res.on("end", function () {
		var body = Buffer.concat(chunks);
    // console.log(body.toString());
    
    var trivia = JSON.parse(body);

    console.log(" ");
    console.log("------------  Todays Math Trivia  -------------------------");
    console.log("Question",trivia.text)
    console.log("Answer",trivia.number)
    console.log("-------------------------------------------------------");


	});
});

req.end();







