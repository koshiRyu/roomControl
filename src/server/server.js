let ws = require("websocket.io");
let https = require("https");
let fs = require("fs");
let hostname = "127.0.0.1";
let port = 8443;
let url = "wss://" + hostname + ":" + port + "/";

var server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html',
                'Content-Length': content.length}
                );
    res.end(content);
})

var content = '<!doctype html><html><head><title>WSS Test</title></head><body><div id="out"></div><script>' +
    'var wss = new WebSocket("'+ url + '");' +
    'var out = document.getElementById("out");'+
    'wss.onmessage = function(e) {out.innerHTML = "<div>" + e.data + "</div>";}'+
    '</script></body></html>';

var wss = ws.attach(ssl_server);
wss.on('connection', function(socket) {
  var counter = 0;
  setInterval(function() {
    socket.send('Hello wss from Server: ' + counter++);
  }, 500);
});
 
ssl_server.listen(port, function() {
  console.log('Listening on ' + port);
});