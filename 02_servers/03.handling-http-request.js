let http = require('http');
const port = 8180;

function handle_get_request(response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Get action was requested');
}

function handle_post_request(response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Post action was requested');
}

function handle_put_request(response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Put action was requested');
}

function handle_delete_request(response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Delete action was requested');
}

function handle_bad_request(response) {
    response.writeHead(400, {'Content-Type': 'text/plain'});
    response.end('Bad request');
}

function handle_request(request, response) {
    console.log(request.body)
    switch (request.method) {
        case 'GET':
            handle_get_request(response);
            break;
        case 'POST':
            handle_post_request(response);
            break;
        case 'PUT':
            handle_put_request(response);
            break;
        case 'DELETE':
            handle_delete_request(response);
            break;
        default:
            handle_bad_request(response);
            break;
    }
    console.log('Request processing ended')
}

http.createServer(handle_request).listen(port);
console.log('Started Node.js server');