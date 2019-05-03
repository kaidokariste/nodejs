const fs = require('fs');
const {Client} = require('pg')

const client = new Client({
    user: process.env.USERNAME,
    host: process.env.SERVER,
    database: process.env.DB,
    password: process.env.PASSWORD,
    port: 5432,
})


let query = 'select file_name, base64_string from filepank';

let networkDrive = '\\\\MyDocs\\FolderToGenerate\\';

function ecdFileGenerator(query_string) {
    client.connect()
    client.query(query_string, (err, res) => {
        if (err) {
            console.error('error: ', err);
            process.exit(1);
        }

        /* loop trough each person*/
        for (i = 0; i < res.rows.length; i++) {

            let fileName = res.rows[i].file_name;
            let ecdClob = res.rows[i].base64_string;

            //Write base64 image to file
            fs.writeFile(networkDrive + fileName, ecdClob, {encoding: 'base64'}, function (err) {
                if (err) {
                    console.error('error: ', err);
                    process.exit(1);
                }
                console.log('File created ', fileName);
            });

        }

        client.end()
    })
}

ecdFileGenerator(query);

