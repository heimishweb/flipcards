var express = require("express");
var router = express.Router();

// Import the model (flipcards.js) to use its database functions.
var flipcard = require("../models/flipcards.js");

// Create all our routes and set up logic within those routes where required.
// Route to get to start page
router.get("/", function(req, res) {
  res.render("starterPage");
});

// Route to get to javascript questions
router.get("/javascript", function(req, res) {
  var cat = "javascript";
  var condition = " category = '" + cat + "'" ;
  //  console.log("conditionI: ",condition);
  flipcard.selectOne(
    condition,
    function(data) {
      var hbsObject = {
        flipcards: data,
      };
      //  console.log("results: ",hbsObject);
      res.render("index", hbsObject);
    });
});

// Route to get to html questions
router.get("/hypertext", function(req, res) {
  var cat = "html";
  var condition = " category = '" + cat + "'" ;
  //  console.log("conditionI: ",condition);
  flipcard.selectOne(
    condition,
    function(data) {
      var hbsObject = {
        flipcards: data,
      };
      //  console.log("results: ",hbsObject);
      res.render("index", hbsObject);
    });
});

// Route to get to css questions
router.get("/css", function(req, res) {
  var cat = "css";
  var condition = " category = '" + cat + "'" ;
  //  console.log("conditionI: ",condition);
  flipcard.selectOne(
    condition,
    function(data) {
      var hbsObject = {
        flipcards: data,
      };
      //  console.log("results: ",hbsObject);
      res.render("index", hbsObject);
    });
});

// Route to get to mysql questions
router.get("/mysql", function(req, res) {
  var cat = "sql";
  var condition = " category = '" + cat + "'" ;
  //  console.log("conditionI: ",condition);
  flipcard.selectOne(
    condition,
    function(data) {
      var hbsObject = {
        flipcards: data,
      };
      //  console.log("results: ",hbsObject);
      res.render("index", hbsObject);
    });
});

// Newsletter signup
router.post("/api/newslettersignup", function(req, res) {
  flipcard.insertOne([
    "fname", "lname", "email"
  ], [
    req.body.fname, req.body.lname, req.body.email
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});




// Route to get to Home Page
router.get("/starterPage", function(req, res) {
  res.render("starterPage");
});


// Route to get to Home Page
router.get("/newsletter", function(req, res) {
  res.render("newsletter");
});


// Route to get to newsletter thankyou page
router.get("/newsletterthanks", function(req, res) {
  res.render("newsletterthanks");
});

// Route to get to about page
router.get("/aboutPage", function(req, res) {
  res.render("aboutPage");
});

// Export routes for server.js to use.
module.exports = router;
