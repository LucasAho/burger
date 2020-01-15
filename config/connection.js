//Requiring mysql
var mysql = require("mysql");

//Connection to mysql 
var connection = mysql.createConnection({
    host:"localhost",
    port: 3306,
    user: "root",
    password: "gitsql",
    database: "burgers_db"
});

//Starts init function with connection
connection.connect(err => {
    if (err) {
        console.log("error connecting: " + err.stack);
        return;
    } 
    console.log("connected as id " + connection.threadId);
});

module.exports(connection);
