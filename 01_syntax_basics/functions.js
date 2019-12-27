"use strict"; //stric rules for conversions etc.

/* Example function for greeting family members. Function gets array as argument
* */
let family = [ "Kaido", "Kardo", "Liis", "Ufi", "Geron"];

function getFamilyMemberNames(familiList) { // expecting array as argument
    familiList.forEach(memberOfFamily => { // using foreEach method to loop over array
        if (memberOfFamily === 'Kaido') {
            console.log(memberOfFamily, " <- See olen mina");
        } else {
            console.log('Tere' + memberOfFamily);
        }
    });
}

/*Call function*/
getFamilyMemberNames(family);

// Self invoking anonymous function
// Function expressions will execute automatically if the expression is followed by ().
(function () {
    console.log(Date());      // I will invoke myself
})();

//Function expression
let x = function (a, b) {return a * b}; // anonymous function stored into variable
let z = x(4, 3);
console.log(z); // 12

//Method - function inside an object
let basicMathematics = {
    // first method calculates qube
    "qube": function (x) {
        let n = x * x * x;
        console.log(n);
    },

    //second calculates square
    "square": function (x) {
        let n = x * x;
        console.log(n);
    }
};

//Calling method qube
basicMathematics.qube(4);
basicMathematics.square(5);
//Math function for random numbers
console.info('Random number between 0 and 10 is: ', Math.floor(Math.random()*11));

// Using the Rest Parameter (...)
/*
* A rest parameter is defined using the ellipsis (...) to signify that that parameter
* is a placeholder for any number of arguments
*/
const max = function(...values) {
    console.log(values instanceof Array); // test "values" against Array and gets true, so values is already Array
    let large = values[0]; // assume first element of array is largest
    for(let i = 0; i < values.length; i++) { //loop trough array and compare every following element
        if(values[i] > large) {
            large = values[i];
        }
    }
    return large;
};

console.log(max(2, 1, 7, 4));

// SPREAD OPERATOR
/*
* The spread operator may be used with any iterable object, and it expands,
* or spreads, the contained values into discrete values. Used when calling a function
*/
const greeting = function(...names) { // If it is in function parameter, then it is called "Rest parameter"
    console.log('hello ' + names.join(' and '));
};

const peopleNames = ['Kaido', 'Tom', 'Jerry', 'Marko'];
greeting(...peopleNames); // If it is used on calling function, then it is called spread operator


const names1 = ['Laurel', 'Hardy', 'Todd'];
const names2 = ['Rock'];

const sayHello = function(name1, name2) { // function is not using rest parameter
    console.log('hello ' + name1 + ' and ' + name2);
};

// caller is using spread operator, meaning parsing values from an array
sayHello(...names1); // hello Laurel and Hardy
sayHello(...names2); // hello Rock and undefined

// MIXED CONSTRUCTION
const mixed = function(name1, name2, ...names) {
    console.log('name1: ' + name1);
    console.log('name2: ' + name2);
    console.log('names: ' + names);
};
mixed('Tom', ...['Jerry', 'Tyke', 'Spike']);

//Using default parameterts
console.log ('***SORT BOOKS BY TITLE***');

const books = [
    { title: 'Who Moved My Cheese' },
    { title: 'Great Expectations' },
    { title: 'The Power of Positive Thinking' }
];

const sortByTitle = function(books, ascending = true) {
    const multiplier = ascending ? 1 : -1; //functional style, basically saying if ascending = true then 1 else -1

    const byTitle = function(book1, book2) {
        return book1.title.localeCompare(book2.title) * multiplier; // referenceStr.localeCompare(compareString) - compares two strings returns 1,-1, 0
    };
    return books.slice().sort(byTitle); // sorting an array by using compare functions. For more look documentation Array.prototype.sort()
};

console.log(sortByTitle(books));
console.log(sortByTitle(books, false));