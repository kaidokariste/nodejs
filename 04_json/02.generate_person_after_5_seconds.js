
let aFirstName = ['Sofia','Maria','Alisa','Aleksandra','Arina','Anna','Eliise','Robin','Rasmus','Daniel','Artur','Oliver','Robert','Karl'];
let aSecondName = ['Ivanov','Tamm','Saar','Sepp','Mägi','Smirnov','Kask','Kukk','Rebane','Ilves','Pärn','Koppel'];
//console.info(aFirstName.length);
//console.info(aFirstName[0]);

function getRandomArrayPosition(maxArrayPosition){
    let vPosition = Math.floor(Math.random()*(maxArrayPosition));
    console.info('Random position is: ',vPosition );
    return vPosition
}

function getRandomName(aNames){
    let vNamePosition = getRandomArrayPosition(aNames.length);
    console.info(aNames[vNamePosition]);
    return aNames[vNamePosition];
}

function generatePerson(aFirstName, aSecondName){
    let vFirstName = getRandomName(aFirstName),
        vSecondName = getRandomName(aSecondName);

    let vPerson = {
        "firstName": vFirstName,
        "secondName": vSecondName
    };
    console.info(vPerson)
}

//getRandomName(aFirstName);
//getRandomName(aSecondName);
setInterval(generatePerson,5000,aFirstName,aSecondName);
