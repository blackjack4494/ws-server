const WebSocket = require('ws');
const http = require('http');

//const server = http.createServer();
const wss = new WebSocket.Server({ port: 6767 });
//const wss = new WebSocket.Server({ noServer: true });

/*
server.listen(6868);

server.on('request', (req, res) => {
    res.write();
    res.end();
});
*/

wss.on('connection', function connection(ws, req) {
    console.log("connected to " + req.connection.remoteAddress + ":" + req.connection.remotePort + " over " + req.connection.remoteFamily);
    ws.on('message', function incoming(data) {
        console.log(data);
    })
})