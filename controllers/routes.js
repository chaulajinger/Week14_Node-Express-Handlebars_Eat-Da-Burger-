var express = require('express');
var router = express.Router();
var burger = require("../models/burger.js");

//When the user goes to the home page then run the burger.selectAll fx
router.get("/", function(req,res){
  // pass in a callback fx (function(burger_data))
  burger.selectAll(function(burger_data){
    console.log({burgers: burger_data});
  // take the response from the cb fx and sending it to index.handlebars for resending. 
  res.render("index", {burgers: burger_data});
  })
});

router.put("/burgers/update", function(req, res) {
  burger.update(req.body.burger_id, function(response){
    console.log(response);
    res.redirect('/');
  })
})

router.post("/burgers/insert", function(req, res) {
  console.log(req.body.burger_name);
  burger.insertOne(req.body.burger_name, function(response) {
    res.redirect('/');
  })
})

module.exports = router;