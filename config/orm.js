const connection = require("./connection")

const connection = require("./connection");

var orm = {
    selectAll: function (table, cb) {
      connection.query(`SELECT * FROM ??`, [table], function (err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
    insertOne: function (table, burgerName, cb) {
      connection.query(`INSERT INTO ?? (burger_name) VALUES (?)`, [table, burgerName], function (err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
    updateOne: function (table, id, cb) {
      connection.query(`UPDATE ?? SET devoured = true
      WHERE id = ?`, [table, id], function (err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
  };

  module.exports = orm;