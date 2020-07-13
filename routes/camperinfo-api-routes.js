// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
const db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
  // Get all campers info
  app.get("/api/all", (req, res) => {
    CamperInfo.findAll({}).then(function(results) {
      res.json(results);
    });
  });

  // Get a specific camper info
  app.get("/api/:CamperInfo", (req, res) => {
    CamperInfo.findAll({
        email: DataTypes.STRING,
      }
    ).then(function(results) {
      res.json(results);
    });
  });

  // Get all campers from a specific state
  app.get("/api/state/:state", function(req, res) {
    Book.findAll({
      where: {
        state: req.params.state
      }
    }).then(function(results) {
      res.json(results);
    });
  });

  // Add a camper
  app.post("/api/new", (req, res) => {
    console.log("Camper Data:");
    console.log(req.body);
    CamperInfo.create({
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        userPassword: DataTypes.STRING,
        state: DataTypes.STRING,
        created_at: DataTypes.DATE
    }).then(function(results) {
      res.json(results);
    });
  });

  // Delete a camper
    app.delete("/api/camperInfo/:id", (req, res) => {
    console.log("Camper ID:");
    console.log(req.params.id);
    CamperInfo.destroy({
      where: {
        id: req.params.id
      }
    }).then(function() {
      res.end();
    });
  });
};
