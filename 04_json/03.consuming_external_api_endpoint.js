/*Very basic api server with one endpoint consuming data from external source*/
var express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    request = require('request');

app.set('port', process.env.PORT || 3500);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var router = new express.Router();

//Setup external endpoint
router.get('/external-api', (req, res)=> {
    request({method: 'GET', uri: 'http://www.mocky.io/v2/5bfea1c83100007700bb4d78'}, (error, response, body)=> {
        if(error) {throw error;}
        console.log('statusCode:', response && response.statusCode, 'statusMessage:', response && response.statusMessage);
        res.send(body);
    })
});


app.use('/', router);

var server = app.listen(app.get('port'), () => {
    console.log('Server up: http://localhost:' + app.get('port'));
});


