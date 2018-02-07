var express = require("express");
var app = express();
const { Client } = require('pg');

app.get('/', function(req, res){
  
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: true,
  });
  client.connect();

  if (req.query.q != undefined){
    client.query('INSERT INTO Messages(msg) VALUES ($1);',[req.query.q], (err, data) => {
      console.log("data added")
      console.log(err)
    });
  }
  else{
    client.query('SELECT * FROM messages;', (err, data) => {
      for (let row of data.rows) {
        res.end(JSON.stringify(row));
      }
      console.log(err)
    });
  }
  client.end();
  console.log(req.query.q)
});

app.listen(process.env.PORT);