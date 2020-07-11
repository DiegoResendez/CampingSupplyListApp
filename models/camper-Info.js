// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard librar
module.exports = function(sequelize, DataTypes) {
// Creates a "Chirp" model that matches up with DB
let CamperInfo = sequelize.define("camperInfo", {
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  userPassword: DataTypes.STRING,
  state: DataTypes.STRING,
  created_at: DataTypes.DATE
});

return CamperInfo
};