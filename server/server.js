const express = require('express');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');
const app = express();
const port = 3000;


var con = mysql.createConnection({
  host: "25.66.190.26",
  user: "joe",
  password: "joe",
  database: 'online_ordering'
});

console.log("Connecting...");
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

