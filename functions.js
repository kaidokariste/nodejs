function getFamilyMemberNames(){
    "use strict"; //stric rules for conversions etc.

    /* Store members names in array */
    let family = [
        "Kaido", //numbers start at 0
        "Kardo",
        "Liis",
        "Ufi"
    ];

    let peopleCount = family.length, i;


    if(peopleCount >0){
        for (i=0; i < peopleCount; i = i + 1) {
            let person = family[i];
            /* if person is kaido, do something special*/
            if(person === "Kaido"){
                console.log(person + ", this is me");
            }else{
                console.log(person);
            }

        }
    }
}

/*Call function*/
getFamilyMemberNames();

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