//Importing orm file
var orm = require("../config/orm.js");

//This file will do cool stuff like call ORM functions, just you wait
var burger = {
    all: cb => {
        orm.all("burgers", res => {
            cb(res);
        });
    },
    create: (cols, vals, cb) => {
        orm.create("burgers", cols, vals, res => {
            cb(res);
        });
    },
    update: (objColVals, condition, cb) => {
        orm.update("burgers", objColVals, condition, res => {
            cb(res);
        });
    },
    delete: (condition, cb) => {
        orm.delete("burgers", condition, res => {
            cb(res);
        });
    }
}

module.exports = burger;