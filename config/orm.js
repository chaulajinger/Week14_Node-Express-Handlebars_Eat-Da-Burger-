var connection = require("./connection.js");

var orm = {
    // takes in the table name and the callback fx passed in from burgers.js
    selectAll: function(table, cb) {
      connection.query(`SELECT * FROM ${table};`, function(err, res)
      {
        if(err) throw err;
        cb(res);
      })
    },

    update: function(table, bruger_id, cb) {
      connection.query(`UPDATE ${table} SET devoured=true WHERE id=${bruger_id};`, function(err, res) {
        if(err) throw err;
        cb(res);
      })
    },

    insertOne: function(table, name, cb) {
      connection.query(`INSERT INTO ${table} (burger_name) VALUES ("${name}");`, function(err, res){
        if(err) throw err;
        cb(res);
      })
    }
}

module.exports = orm;