var http = require('http')
var fs = require('fs')

http.createServer(function (req, res) {
    text = fs.readFileSync('insert.html', 'utf8')
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(text)
}).listen(process.env.PORT)