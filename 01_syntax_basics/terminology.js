/* Empty Global Variable 3 possible ways to define */

/* with var outside a function */
//var titleOfApplication;


/*Attached to the window object*/
//window.titleOfApplication;

/*global from inside a function - define everywhere without using var*/
//titleOfApplication;

// STRINGS
var familyMemeber1 = "Liis";
var familyMemeber2 = "Kaido";

console.log(familyMemeber1);
console.log(familyMemeber2 + ", this is me"); // concatenate strings
console.log(100 + 50); // adding numbers together


// Arrays
var family = [
    "Kaido", //numbers start at 0
    "Kardo",
    "Liis",
    "Ufi"
];

// Objects
// Object grandmother with necessary properties
var grandmother = {
    "first-name":"anna",
    "last-name":"carroll",
    "nickname":"mamma"
};

console.log("Mamas first name is: " + grandmother["first-name"])

// Loops
var peopleCount = family.length, // return length of array
    i;

/* checking to make sure there are people in the list*/
if(peopleCount >0){
    /* loop trough each person*/
    for(i=0; i < peopleCount; i++){
        /* this represents i person */
        console.log(family[i])
    }
}



//Conditionals
// if statement
var person = "Kaido";

if(person === "Liis"){
    console.log("Family member, " + person)
}

//if-elseif-else
if(person === "ana"){
    console.log("Grandma")
} else if (person === "kaido"){
    console.log("Family member")
} else {
    console.log("status unknown")
}

// Switch
/* checking to make sure there are people in the list*/
if(peopleCount >0){
    /* loop trough each person*/
    for(i=0; i < peopleCount; i++){
       switch(family[i]){
           case "Kaido":
               console.log("this is me: " + family[i]);
               break;
           case "Liis":
               console.log("My wife " + family[i]);
               break;
           default:
               console.log("Others: "+ family[i])
       }
    }
}