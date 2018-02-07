var express = require("express");
var app = express();

const { Client } = require('pg');
const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

client.connect();

app.get('/', function(req, res){
  
  client.query('INSERT INTO Messages(msg) VALUES ($1);',[req.query.q], (err, res) => {
    console.log("data added")
    console.log(err)
    client.end();
  });
  
});

app.listen(process.env.PORT);