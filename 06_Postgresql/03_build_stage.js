/*
* Pass folder path and file_name [optional] as script argument. If file exists in specified folder, only this file is executed.
* Pass DB credentials as environment variables
* */

const fs = require('fs');
const {Client} = require('pg')

const client = new Client({
    user: process.env.USERNAME,
    host: process.env.SERVER,
    database: process.env.DB,
    password: process.env.PASSWORD,
    port: 5432,
})

function executeSqlFiles(folderPath, con, fileName) {
    console.log(folderPath);
    con.connect();
    /**/
    fs.readdir(folderPath, (err, files) => {
        if (err) {
            console.error('error: ', err);
            process.exit(1);
        }
        let fileCount = files.length;

        // Check if file name from program arguments exist in current folder
        // If it exists, execute only this file
        if (files.indexOf(fileName) > -1) {
            console.log('Checking file worked' + folderPath + process.argv[3]);
            var sql = fs.readFileSync(folderPath + fileName).toString();
            con.query(sql, (err, res) => {
                console.log(fileName);
                if (err) {
                    console.error('error: ', err);
                    process.exit(1);
                }
                console.log('Closing connection')
                con.end();
            });

        } else {
            console.log('Total files to implement in ' + folderPath + ' is ' + fileCount);
            console.log('Overall insert ..');
            files.forEach((file, index) => {
                var sql = fs.readFileSync(folderPath + file).toString();
                console.log('Start processing: ', file, index + 1);
                con.query(sql, (err, res) => {
                    console.log('Processed: ', file, index + 1);
                    if (err) {
                        console.error('error: ', err);
                        process.exit(1);
                    } else if (index + 1 === fileCount) {
                        console.log('Closing connection')
                        con.end();
                    }
                });
            });
        }

    });
}

executeSqlFiles(process.argv[2], client, process.argv[3]);


