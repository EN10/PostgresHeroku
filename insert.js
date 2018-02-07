const { Client } = require('pg');
const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

client.connect();

client.query('INSERT INTO Messages(msg) VALUES ($1);',['enio'], (err, res) => {
  console.log("data added")
  client.end();
});