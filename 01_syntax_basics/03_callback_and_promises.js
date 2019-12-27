const request = require('request');
const rp = require('request-promise');

// /*
// *  Callback function
// */
function getWeather(callback){
    request('http://www.mocky.io/v2/5ddf8a5a310000cb723ae82a', (error, response, body) => {
        if (error) return callback(error);
        let statusCode = response && response.statusCode;
        let weather = body;
        callback (null,statusCode, weather)
    });
}

// Function that we want to give
function printResponse (err, res, content) {
    console.log('error:', err); // Print the error if one occurred
    console.log('statusCode:', res); // Print the response status code if a response was received
    console.log('body:', content); // Print the HTML for the Google homepage.
};

// Anonymous callback definition
getWeather(function(error, response, body){
    console.log('Anonymous function reponse status:', response, body)
});

// It uses function as an object so no need to define parameters
getWeather(printResponse);


/*
* PROMISES
* */

var options = {
    uri: 'http://www.mocky.io/v2/5ddf8a5a310000cb723ae82a',
    headers: {
        'User-Agent': 'Request-Promise'
    },
    resolveWithFullResponse: true,
    json: false // Automatically parses the JSON string in the response
};

rp(options)
    .then((res) => {
        console.log(res.statusCode, res.body);
    })
    .catch(function (err) {
        // API call failed...
        console.log(err);
    });

/*-------------------------------------*/
