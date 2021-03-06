//Dependencies
//===========================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


//Express Configuration
//===========================================================

// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/app/public/')));


//Required files to read Routes
//============================================================
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// app.use(express.static(path.join(__dirname, '/app/public/'))); 
//Starts the server to begin listening
//============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });