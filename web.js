var express = require("express");
var app = express();

const { Client } = require('pg');
const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

app.get('/', function(req, res){

  if (req.query.q != undefined){
    client.connect();
    client.query('INSERT INTO Messages(msg) VALUES ($1);',[req.query.q], (err, res) => {
      console.log("data added")
      console.log(err)
      client.end();
    });
  }
  else{
    client.connect();
    client.query('SELECT * FROM messages;', (err, data) => {
      for (let row of data.rows) {
        res.end(JSON.stringify(row));
      }
      client.end();
    });
  }
  
  console.log(req.query.q)
});

app.listen(process.env.PORT);