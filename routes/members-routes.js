var db = require("../models");
module.exports = function(req,res) {

// GET route for getting all of the todos
app.get("/api/campinglist", function(req, res) {
  // findAll returns all entries for a table when used with no options
  db.campinglist.findAll({}).then(function(dbCampinglist) {
    // We have access to the todos as an argument inside of the callback function
    res.json(dbCampinglist);
  });
});

// POST route for saving a new todo
app.post("/api/campinglist", function(req, res) {
  console.log(req.body);
  // create takes an argument of an object describing the item we want to
  // insert into our table. In this case we just we pass in an object with a text
  // and complete property (req.body)
  db.Campinglist.create({
    items: req.body.items,
    gotIt: req.body.gotIt, 
    needIt: req.body.needIt,
    addShoppingCart: req.body.addShoppingCart
  }).then(function(dbCampinglist) {
    // We have access to the new todo as an argument inside of the callback function
    res.json(dbCampinglist);
  });
});

// DELETE route for deleting todos. We can get the id of the todo we want to delete from
// req.params.id
app.delete("/api/campinglist/:id", function(req, res) {

});

// PUT route for updating todos. We can get the updated todo from req.body
app.put("/api/campinglist", function(req, res) {

});
};

