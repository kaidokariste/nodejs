let amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', handleQueue);

function handleQueue(err, conn) {
    conn.createChannel(function(err, ch) {
        if (err) return console.error('[handleQue]: ', err);
        let q = 'hello';
        ch.assertQueue(q, {durable: false});
        // Note: on Node 6 Buffer.from(msg) should be used
        ch.sendToQueue(q, new Buffer('Hello World!'));
        console.log(" [x] Sent 'Hello World!'");
    });
    setTimeout(function() { conn.close(); process.exit(0) }, 500);
}