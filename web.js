var express = require("express");
var app = express();

const { Client } = require('pg');
const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

client.connect();

app.get('/', function(req, res){

  if (req.query.q != undefined){
    client.query('INSERT INTO Messages(msg) VALUES ($1);',[req.query.q], (err, res) => {
      console.log("data added")
      console.log(err)
      client.end();
    });
  }
  console.log(req.query.q)
});

app.listen(process.env.PORT);