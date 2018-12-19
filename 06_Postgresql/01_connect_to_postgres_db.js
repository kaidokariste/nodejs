const { Client } = require('pg')

const client = new Client({
    user: process.env.USERNAME,
    host: process.env.SERVER,
    database: process.env.DB,
    password: process.env.PASSWORD,
    port: 5432,
})

client.connect()

client.query('SELECT NOW()', (err, res) => {
    console.log(err, res.rows[0].now)
    client.end()
})

