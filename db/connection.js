const mysql = require('mysql2');

const db = mysql.createConnection(
    {
      host: "localhost",
      user: "root",
      password: "password", 
      database: "etracker",
    },
    console.log("Connected to the Employee Tracker Database")
  );

  module.exports= db;