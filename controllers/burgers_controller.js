//Requires express
var express = require("express");

var router = express.Router();

//Imports burger.js
var burger = require("../models/burger");

router.get("/", (req,res) => {
    burger.all(data => {
        var hbsObj = {
            burgers: data
        }
        console.log(hbsObj);
        res.render("index", hbsObj);
    });
});

router.post("/api/burgers", (req,res) => {
    burger.create([
        "burger_name", "devoured"
    ], [
        req.body.burger_name, req.body.devoured
    ], result => {
        res.json({ id: result.insertId });
    });
});

// Export routes for server.js to use.
module.exports = router;
