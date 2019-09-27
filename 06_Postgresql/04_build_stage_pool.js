const fs = require('fs');
const {Pool} = require('pg');

const pool = new Pool({
    host: process.env.SERVER,
    user: process.env.USERNAME,
    database: process.env.DB,
    password: process.env.PASSWORD,
    port: 5432,
    max: 5,
    idleTimeoutMillis: 2700000, //45 min
    connectionTimeoutMillis: 3000000, // 50min
})


function executeSqlPool(folderPath, pool) {
    fs.readdir(folderPath, (err, files) => {
        if (err) {
            console.error('error: ', err);
            process.exit(1);
        }

        let fileCount = files.length;

        console.log('Total files to implement in ' + folderPath + ' is ' + fileCount);

        files.forEach((file, index) => {
            console.log(file, index)
            var sql = fs.readFileSync(folderPath + file).toString();
            pool.query(sql, (err, res) => {
                fileCount = fileCount - 1
                console.log('Processed: ', file, index + 1, 'Remaining: ', fileCount);
                if (err) {
                    console.error('error: ', err);
                    process.exit(1);
                    pool.end()
                } else if (fileCount === 0) {
                    console.log('Closing pool')
                    pool.end();
                }
            })
        });
    });
}

//Process arguments given in commandline
executeSqlPool(process.argv[2], pool);