var pg = require('pg');
pg.connect(process.env.DATABASE_URL, function(err, client) {
    client.query('CREATE TABLE Messages(msg varchar(255))',function(err, result) {
        console.log("Table Created")
    });
});