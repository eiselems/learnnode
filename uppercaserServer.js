var http = require('http');
var map = require('through2-map');
var server = http.createServer(function (req, res) {  
    
    if (req.method == 'POST') {
       console.log("POST");
       var body = '';
       req.on('data', function (data) {
         body += data;
         console.log("Partial body: " + body);
        });
        
        
        req.on('end', function () {
            console.log("Body: " + body);
            res.writeHead(200, { 'content-type': 'text/plain' });
            res.end(body.toUpperCase());
        });
        
    }
    
});
   
server.listen(parseInt(process.argv[2]));