var net = require('net');
var strftime = require('strftime') // not required in browsers

var server = net.createServer(function (socket) {  
    
    var data = (strftime('%Y-%m-%d %H:%M')) // => April 28, 2011 18:21:08

    socket.end(data+"\n");
})  

server.listen(parseInt(process.argv[2]));