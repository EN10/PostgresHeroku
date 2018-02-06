const { Client } = require('pg');
const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});
client.connect();
client.query('CREATE TABLE Messages(msg varchar(255));', (err, res) => {
  client.end();
  console.log("Table Created")
});