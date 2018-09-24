const fs = require('fs');

function read_json_file() {
    let file = '../resource/contacts.json';
    return fs.readFileSync(file);
}

exports.list = function () {
    return JSON.parse(read_json_file());
}

// Returns JSON object representing the contact identified uniquely by its primary phone number.
exports.query = function (number) {
    let json_result = JSON.parse(read_json_file());
    let result = json_result.result;

    for (var i=0; i < result.length; i++){
        var contact = result[i];
        if (contact.primarycontactnumber == number) {
            return contact;
        }
    }
    return null;
}

//Returns JSON object  representing first found contact found by provided criterion
exports.query_by_arg = function (arg, value) {
    let json_result = JSON.parse(read_json_file());
    var result = json_result.result;

    for (var i=0; i < result.length; i++){
        var contact = result[i];
        if (contact[arg].toUpperCase() == value.toUpperCase()){
            return contact;
        }
    }
    return null;
}

// Returns JSOn array containing list with all the groups available in our contacts
exports.list_groups = function () {
    var json_result = JSON.parse(read_json_file());
    var result = json_result.result;

    var resultArray = new Array();

    for(var i = 0; i<result.length; i++){
        var groups = result[i].groups;

        for (var index = 0; index < groups.length; index++){
            if(resultArray.indexOf(groups[index]) == -1){
                resultArray.push(groups[index]);
            }
        }
    }
    return resultArray;
}

// Returns array with json objects for all contacts that are are assigned to the group
exports.get_members = function (group_name) {
    var json_result = JSON.parse(read_json_file());
    var result = json_result.result;
    var resultArray = new Array();

    for(var i=0; i < result.length; i++){
        if (result[i].groups.indexOf(group_name) > -1){
            resultArray.push(result[i]);
        }
    }
    return resultArray
}

