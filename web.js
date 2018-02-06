var express = require("express");
var app = express();

const { Client } = require('pg');
const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

app.get('/', function(req, res){
    
client.connect();
client.query('SELECT * FROM messages;', (err, data) => {
    client.end();
    res.end(data.rows[0])
    });
});

app.listen(process.env.PORT);