// Dependencies
// =============================================================

module.exports = function(sequelize, DataTypes) {

// Creates a "Chirp" model that matches up with DB
let Campinglist = sequelize.define("campingList", {
  items: DataTypes.STRING,
  gotIt: DataTypes.BOOLEAN,
  needIt: DataTypes.BOOLEAN,
  addShoppingCart: DataTypes.BOOLEAN  // not sure about this BOOLEAN.  Think we switched this to Amazon keyword search.
});

return Campinglist
};