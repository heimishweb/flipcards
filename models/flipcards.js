// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var flipcard = {
  selectAll: function(cb) {
    orm.selectAll("flipcard", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(cols, vals, cb) {
    orm.insertOne("flipcard", cols, vals, function(res) {
      cb(res);
    });
  },
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne("flipcard", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (flipcards_controller.js).
module.exports = flipcard;



