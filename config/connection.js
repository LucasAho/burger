//Requiring mysql
var mysql = require("mysql");

//Connection to mysql 
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host:"localhost",
        user: "root",
        password: "gitsql",
        database: "burgers_db"
    });
}

//Starts init function with connection
connection.connect(err => {
    if (err) {
        console.log("error connecting: " + err.stack);
        return;
    } 
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;
