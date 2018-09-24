'use strict';
//Importing fs package for reading file
const fs = require('fs');

//readFileSync - nothing else is executed till all file is readed
// syncronus reading
let rawdata = fs.readFileSync('../resource/tartu.json');
let student = JSON.parse(rawdata);
console.log(student);

// Accessing to object properties

console.log(student.districts[15], student.population);

// asyncronus reading
function readContent(callback) {
    fs.readFile('../resource/tartu.json', function (err, data) {
        if (err) return callback(err);
        var tartu = JSON.parse(data);
        callback(null, tartu);
    })
}

readContent(function (err, content) {
    console.log(content);
});


