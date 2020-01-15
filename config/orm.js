// Imports MySQL connection.
var connection = require("../config/connection.js");

selectAll = () => {
    console.log("All selected");
}

insertOne = () => {
    console.log("inserted");
}

updateOne = () => {
    console.log("updated");
}

module.exports = orm;