var express = require("express");
var app = express();
const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

client.connect();
app.get('/', function(req, res){
    client.query('SELECT * FROM messages;', (err, data) => {
        res.end(JSON.stringify(data.rows[0]));
    client.end();
    });

});

app.listen(process.env.PORT);