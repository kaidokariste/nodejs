const mongoose = require('mongoose');

let contactSchema = new mongoose.Schema({
    primarycontactnumber: {type: String, index: {unique: true}},
    firstname: String,
    lastname: String,
    title: String,
    company: String,
    jobtitle: String,
    othercontactnumbers: [String],
    primaryemailaddress: String,
    emailaddresses: [String],
    groups: [String]
});

let Contact = mongoose.model('myModel', contactSchema);

let john_douglas = new Contact({
    firstname: "John",
    lastname: "Douglas",
    title: "Mr. ",
    company: "Dev Inc.",
    jobtitle: "Developer",
    primarycontactnumber: "+359777223345",
    othercontactnumbers: [],
    primaryemailaddress: "john.douglas@xyz.com",
    emailaddresses: ["j.douglas@xyz.com"],
    groups: ["Dev"]
});

//Connection
mongoose.connect('mongodb://myUser:myPassword@localhost:27017/myDb', {useNewUrlParser: true});
var db = mongoose.connection;
db.once('open', function () {
    console.log('MongoDB connection successful.');
});

john_douglas.save((err) => {
    if (err) {
        console.log('Error while saving contact');
        console.log(err);
    } else {
        john_douglas.save();
        console.log('Contact succesfully stored');
    }
});
