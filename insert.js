const { Client } = require('pg');
const client = new Client()

client.connect();

client.query('INSERT INTO Messages(msg) VALUES ($1);',['test2'], (err, res) => {
  console.log("data added")
  client.end();
});