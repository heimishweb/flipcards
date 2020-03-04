var express = require("express");

var router = express.Router();

// Import the model (flipcards.js) to use its database functions.
var flipcard = require("../models/flipcards.js");

// Create all our routes and set up logic within those routes where required.

// router.get("/", function(req, res) {
//   flipcard.selectAll(function(data) {
//     var hbsObject = {
//       flipcards: data
//     };
//     console.log(hbsObject);
//     res.render("index", hbsObject);
//   });
// });



router.get("/", function(req, res) {

   var cat = "javascript";
  var condition = " category = '" + cat + "'" ;

  console.log("conditionI: ",condition);
 
   flipcard.selectOne(
     
    condition,
    function(data) {  
    var hbsObject = {
      flipcards: data,
    }

    console.log("results: ",hbsObject);
    res.render("index", hbsObject);
  });

});


router.get("/api/flipcards/:id", function(req, res) {

  var condition = " id = " + req.params.id;

  // var start = 1;  
  // if (req.params.id === "" ) { var condition = " id = " + req.params.id; }
  // else                       { var condition = " id = " + start ; }

  console.log("next condition: ",condition);
 
   flipcard.selectNext(
    condition,
    function(data) {  
    var hbsObject = {
      flipcards: data,
    }

    console.log("Next results: ",hbsObject);
    res.json({ id: res.id, 
              question: res.question,
              answer: res.answer
    });
  });

});






// NOT TOUCHING THIS YET
router.post("/api/flipcards", function(req, res) {
  flipcard.insertOne(["flipcard_name", "devoured"], [req.body.flipcard, req.body.devoured], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

// router.put("/api/flipcards/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   console.log("condition", condition);

//   flipcard.updateOne(
//     {
//       devoured: req.body.devoured
//     },

//     condition,

//     function(result) {
//       if (result.changedRows === 0) {
//         // If no rows were changed, then the ID must not exist, so 404
//         return res.status(404).end();
//       }
//       res.status(200).end();

//     }
//   );
// });

// Export routes for server.js to use.
module.exports = router;
