var http = require('http');
var fs = require("fs");
var server = http.createServer(function (req, res) {  
    var fileLocation = process.argv[3];
    res.writeHead(200, { 'content-type': 'text/plain' });
    fs.createReadStream(fileLocation).pipe(res);
});

server.listen(parseInt(process.argv[2]));