function getFamilyMemberNames(){
    "use strict"; //stric rules for conversions etc.

    /* Store members names in array */
    var family = [
        "Kaido", //numbers start at 0
        "Kardo",
        "Liis",
        "Ufi"
    ];

    var peopleCount = family.length;
    var i;


    if(peopleCount >0){
        for (i=0; i < peopleCount; i = i + 1) {
            var person = family[i];
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