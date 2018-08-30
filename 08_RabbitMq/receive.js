let amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', connectChannel);

function connectChannel(err, conn) {
    conn.createChannel(receiveMessage);
}

function receiveMessage(err, ch) {
    let q = 'hello';

    ch.assertQueue(q, {durable: false}); //
    console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", q);
    ch.consume(q, function(msg) {
        console.log(" [x] Received %s", msg.content.toString());
    }, {noAck: true});
}