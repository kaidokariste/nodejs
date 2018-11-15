/*Javascript data types*/

var myFamilyMembers; //declaring variable with no value
var familyMemeber1 = "Liis";
var familyMemeber2 = "Kaido";
var myFamilyMembers = familyMemeber1 + " ja " + familyMemeber2;

console.log(familyMemeber1);
console.log(familyMemeber2 + ", this is me"); // concatenate strings
console.log(myFamilyMembers);
console.log(100 + 50); // adding numbers together


// Arrays
var stuff = []; // empty array or can be defined also var stuff = new Array();
stuff.push('bike','car','bear'); //add new items => [ 'bike', 'car', 'bear' ]
stuff.pop(); //=> [ 'bike', 'car' ]
var firstStuff =  stuff.shift();  //=> bike [ 'car' ]

var family = [
    "Kaido", //numbers start at 0
    "Kardo",
    "Liis",
    "Ufi"
];

//Loop over array
var peopleCount = family.length, // return length of array
    i;

/* checking to make sure there are people in the list*/
if (peopleCount > 0) {
    /* loop trough each person*/
    for (i = 0; i < peopleCount; i++) {
        /* this represents i person */
        console.log("i:"+ i+ " "+ family[i])
    }
}

// Objects
var myObject = {}; // that's it!

// define properies during declaration
var grandmother = {
    "firstName": "Anna",
    "lastName": "Carroll",
    "nickname": "mamma"
};

//add properties later
grandmother.age = 93; //adding new property to object grandmother

// The this keyword refers to the object that the function is a part of.
// So via the this keyword, the function will be able to access the
// other properties that are part of the object it belongs to.
grandmother.fullName = function(){ //adding methods inside object
    return this.firstName + ' ' + this.lastName
};
grandmother.colors = ['red', 'blue', 'green']; //array property

console.log(grandmother);
console.log("Mamas first name is: " + grandmother["firstName"]); //calling property using square brackets
console.log("Mamas age is: " + grandmother.age); // calling property using dot operator => Mamas age is: 93
console.log("Mamas full name is " + grandmother.fullName());

/*CONTROL STATEMENTS*/
// while, do-while, for, switch

// for loop example
var myVar = 0;
for(var n = 0; n < 33; n += 1) {
    myVar = n;
    console.log(myVar); // => 0 1 ... 32
}

// do while example
var arv = 0;
do {
    arv += 1;
    console.log(arv); // => 1 2 ... 21
} while (arv < 21);

//while example
while (arv > 10) {
    arv -= 1;
    console.log("while tsükli arv: "+ arv); // => 20 19 ... 10
}

//switch example
var w = 0;
switch(w) {
    case 1 :
        console.log("one");
        break;
    case 2 :
        console.log("two");
        break;
    default:
        console.log("none");
} // => "none"


/* CONDITIONALS */

// if statement
var person = "Kaido";

if (person === "Liis") {
    console.log("Family member, " + person)
}

//if-elseif-else
if (person === "ana") {
    console.log("Grandma")
} else if (person === "kaido") {
    console.log("Family member")
} else {
    console.log("status not known")
}

