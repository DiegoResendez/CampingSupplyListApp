// Dependencies
// =============================================================

module.exports = function(sequelize, DataTypes) {

// Creates a "Chirp" model that matches up with DB
let ProductList = sequelize.define("productList", {
  product: DataTypes.STRING,
  ASIN: DataTypes.STRING,
  price: DataTypes.DECIMAL(10,2),
  quantity: DataTypes.INTEGER
});

return ProductList
};