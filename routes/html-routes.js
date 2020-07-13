// Requiring path to so we can use relative routes to our HTML files
const path = require("path");
//const express = require("express");
// const exphbs = require("express-handlebars");
// const app = express();

// var PORT = process.env.PORT || 8080;

// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");



// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

  app.get("/",(req, res) => {
    // If the user already has an account send them to the members page
    if (req.user){
      res.redirect("/members");
    }
     res.render("index");
    //res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  app.get("/members", (req, res) => {
    res.render("members");
  })

  app.get("/login", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.render("login", {emailAddress:"sample-email", password: "password"});
    // res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/signup", (req, res) => {
        res.render("signup", {name:"sample-name", emailAddress: "sample-email", password:"sample-password", state: "sample-state"});
    //res.sendFile(path.join(__dirname, "../public/members.html"));
  });

}
