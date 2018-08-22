let http = require('http');
let dt = require('./modDateTime');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Hello World!\n');
    res.write('The date and time are currently: ' + dt.myDateTime());
    res.end();
}).listen(8080);
console.log('Started Node.js server');
