// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
let Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
let sequelize = require("../config/connection.js");

// Creates a "Chirp" model that matches up with DB
let CampingList = sequelize.define("campingList", {
  items: Sequelize.STRING,
  gotIt: Sequelize.BOOLEAN,
  needIt: Sequelize.BOOLEAN,
  addShoppingCart: Sequelize.BOOLEAN  // not sure about this BOOLEAN.  Think we switched this to Amazon keyword search.
});

// Syncs with DB
CampingList.sync();

// Makes the Chirp Model available for other files (will also create a table)
module.exports = CampingList;
