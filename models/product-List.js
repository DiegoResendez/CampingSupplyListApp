// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
let Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
let sequelize = require("../config/connection.js");

// Creates a "Chirp" model that matches up with DB
let ProductList = sequelize.define("productList", {
  product: Sequelize.STRING,
  ASIN: Sequelize.STRING,
  price: Sequelize.DECIMAL(10,2),
  quantity: Sequelize.INTEGER
});

// Syncs with DB
ProductList.sync();

// Makes the Chirp Model available for other files (will also create a table)
module.exports = ProductList;

//This table may be unnecessary due to new search process.  
//Because we are using the keyword search we will use the API pull to populate
//this information.  