const { Client } = require('pg');
const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

client.connect();

client.query('DELETE * FROM *;', (err, res) => {
  console.log("ALL Deleted")
  client.end();
});