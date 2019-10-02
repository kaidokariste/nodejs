let amqp = require('amqplib/callback_api');

let aFirstName = ['Sofia', 'Maria', 'Alisa', 'Aleksandra', 'Arina', 'Anna', 'Eliise', 'Robin', 'Rasmus', 'Daniel', 'Artur', 'Oliver', 'Robert', 'Karl'];
let aSecondName = ['Ivanov', 'Tamm', 'Saar', 'Sepp', 'Mägi', 'Smirnov', 'Kask', 'Kukk', 'Rebane', 'Ilves', 'Pärn', 'Koppel','Riimann','Karu','Sirge','Pikk'];

let timerId = setInterval(function () {
    amqp.connect('amqp://localhost', handleQueue);
}, 2000);

setTimeout(function(){clearInterval(timerId); process.exit(0)}, 15000);

function handleQueue(err, conn) {
    conn.createChannel(function (err, ch) {
        if (err) return console.error('[handleQue]: ', err);
        let q = 'hello';
        let vPersonToString = JSON.stringify(generatePerson(aFirstName, aSecondName));
        ch.assertQueue(q, {durable: false});
        ch.sendToQueue(q, new Buffer(vPersonToString));
        console.log(" [x] Sent: ", vPersonToString);
    });
}

function getRandomArrayPosition(maxArrayPosition) {
    let vPosition = Math.floor(Math.random() * (maxArrayPosition));
    return vPosition
}

function getRandomName(aNames) {
    let vNamePosition = getRandomArrayPosition(aNames.length);
    //console.info(aNames[vNamePosition]);
    return aNames[vNamePosition];
}

function generatePerson(aFirstName, aSecondName) {
    let vFirstName = getRandomName(aFirstName),
        vSecondName = getRandomName(aSecondName);

    let vPerson = {
        "firstName": vFirstName,
        "secondName": vSecondName
    };
    return vPerson
}
