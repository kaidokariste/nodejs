let http = require('http');
const port = 8180;

function handle_request(request, response){
    response.writeHead(200, {'Content-Type': 'text/plain'});

    response.end('Hello World - Are you restless to go testful?\n');
    console.log('requested');
}

http.createServer(handle_request).listen(port,'127.0.0.1');

console.log('Started Node.js server');