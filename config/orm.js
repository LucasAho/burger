// Imports MySQL connection.
var connection = require("../config/connection.js");

printMysqlVars = (num)  => {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}


var orm = {
    selectAll: (tableInput, cb) => {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, (err,result) => {
            if (err) throw err;
            cb(result);
        })
    },
    insertOne: (table, cols, vals, cb) => {
        var queryString = "INSERT INTO " + table;
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printMysqlVars(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, (err, result) => {
            if (err) throw err;

            cb(result);
        });
    }, 
    updateOne: (table, objColVals, condition, cb) => {
        var queryString = "UPDATE " + table;
        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);

        connection.query(queryString, vals, (err, result) => {
            if (err) throw err;

            cb(result);
        });
    },
};

module.exports = orm;