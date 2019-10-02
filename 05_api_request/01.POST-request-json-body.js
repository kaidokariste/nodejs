const request = require('request');
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;


request.post({url:'https://url-to-authentication-endpoint',
    //Form defines json body to post
    form: {
    "username": "kaidokariste",
    "password": "myPassword"
}}, function(err, httpResponse, body){
	
    accessToken = JSON.parse(body).token;
	//First 12 symbols of returnedtoken
    console.log(accessToken.substr(0,12));
});



