//DELETE a contact
exports.remove = function(model, _primarycontactnumber, response){
    console.log('Deleting contact with primary number: ' + _primarycontactnumber);
    model.findOne({primarycontactnumber: _primarycontactnumber}, (error, data)=> {
        if(error){
            console.log(error);
            if (response != null){
                response.writeHead(500, {'Content-Type':'text/plain'});
                response.end('Internal server error');
            }
            return;
        } else {
            if(!data){
                console.log('not found');
                if(response != null) {
                    reponse.writeHead(404, {'Content-Type':'text/plain'});
                    response.end('Not Found');
                }
                return;
            } else {
                data.remove((error)=>{
                    if(!error){
                        data.remove();
                    } else {
                        console.log(error);
                    }
                });
                if(response != null){
                    response.send('Deleted');
                }
                return;
            }
        }
    });
}

//UPDATE a contact
exports.update = function (model, requestBody, response) {
    let primarynumber = requestBody.primarycontactnumber;
}