const express = require('express')
    , url = require('url')
    , http = require('http')
    , contacts = require('./contacts.js')
    , path = require('path');

const port = 3000;
const app = express();


app.get('/', (req, res) => res.send('Hello World!'));

//We can also add arguments to URI
app.get('/parameter/:name', (req, res) => res.send('Hello ' + req.params.name));

//More flexible uri handler
app.get('/hello', (req, res) => {
    //Return arguments as assotiative objects
    let get_params = url.parse(req.url, true).query;

    //Turn keys into array
    if (Object.keys(get_params).length == 0) {
        res.end('Hello All');
    }
    else {
        // Url http://localhost:3000/hello?name=Siim says "Hello Siim"
        res.end('Hello ' + get_params.name);
    }
});

// HTTP - GET contacts or contacts?firstname=john
app.get('/contacts', function (request, response) {
    let get_params = url.parse(request.url, true).query;
    let arg = Object.keys(get_params)[0];
    let value = get_params[arg];
    //console.log(arg, value);

    if (Object.keys(get_params).length == 0) {
        response.setHeader('content-type', 'application/json');
        response.end(JSON.stringify(contacts.list()))
    }
    else {
        response.setHeader('content-type', 'application/json');
        response.end(JSON.stringify(contacts.query_by_arg(arg, value)));
    }
});

//HTTP - GET http://localhost:3000/contacts/%2B3597777123456
app.get('/contacts/:number', (request,response)=>{
    response.setHeader('content-type','application/json');
    response.end(JSON.stringify(contacts.query(request.params.number)))
});


//HTTP - GET groups
app.get('/groups', (request, response)=>{
    console.log('groups');
    response.setHeader('content-type','application/json');
    response.end(JSON.stringify(contacts.list_groups()));
});

//HTTP - GET http://localhost:3000/groups/Dev
app.get('/groups/:name', (req,res)=>{
    console.log('groups');
    res.setHeader('content-type','application/json');
    res.end(JSON.stringify(contacts.get_members(req.params.name)));
});

/*//development only
if('development' == app.get('env')){
    app.use(express.errorHandler());
}*/

http.createServer(app).listen(port , () => console.log(`Example app listening on port ${port}!`));


