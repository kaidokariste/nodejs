let amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', handleQueue);

function handleQueue(err, conn) {
    conn.createChannel(function(err, ch) {
        if (err) return console.error('[handleQue]: ', err);
        let q = 'task_queue';
        let msg = process.argv.slice(2).join(' '); // arguments in commandline start in position 2. 0 - path to node, 1 - path to this program

        ch.assertQueue(q, {durable: true});
        ch.sendToQueue(q, new Buffer(msg));
        console.log(" [x] Sent '%s'", msg);
    });
    setTimeout(function() { conn.close(); process.exit(0) }, 500);
}