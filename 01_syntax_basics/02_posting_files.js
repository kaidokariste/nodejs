const fs = require('fs');
const path = require('path');
const {Client} = require('pg');
const request = require('request');
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

const client = new Client({
    user: process.env.USERNAME,
    host: process.env.SERVER,
    database: process.env.DB,
    password: process.env.PASSWORD,
    port: 5432,
})


	//Query files id, path to file in some folder and filename from file databse
    let query = 'select id, file_path_for_send, file_name from file_registry')';

    // Connect client to database
    client.connect((err) => {
        if (err) {
            console.error('Connection error', err.stack)
        } else {
            console.log('Client connected')
        }
    });

    // Query the paths and file names of documents we want to send to file service
    client.query(query, (err, res) => {
        if (err) {
            console.log(err);
        }

        // Parse out paths and filenames from response
        let elements = res.rows;

        //Count the number of files
        let totalElements = elements.length;

        console.log('Total files to insert', elements.length);

        //Loop troug each path element
        elements.forEach((elements) => {


            var formData = {
				
                //Pass data via Streams
                file: fs.createReadStream(elements.file_path_for_send + elements.file_name)
            }

            //Make POST request against file service
            request.post(
                {

                    url: 'https://file-service/api/endpoint',
                    headers: {
                        'token': process.env.TOKEN,
                        'Content-Type': 'multipart/form-data'              
                    },
                    formData: formData

                }, function (err, httpResponse, body) {

                    // Errors coming from POST message
                    if (err || IsJsonString(body) === false) {

                        let errorLogging = 'update file_registry set fileservice_response = $$' + err + '$$ where id = ' + elements.id;

                        client.query(errorLogging, (err, res) => {

                            console.log('File posting error logged for :', elements.id);

                            totalElements = totalElements - 1;
                            console.log(totalElements);
							
					// If we have posted all the files, close connection			
                            if (totalElements <= 0) {
                                client.end();
                            }
                        });

                    } else {

						//Parse response body
                        let fileserviceBody = JSON.parse(body);

                        console.log('Upload successful!  Server responded with ID:', fileserviceBody.ID, body, ' for entry ', elements.id);

                        // Update id in corresponding Post
                        let updateId = 'update file_registry set file_id_from_fileservice = \'' + fileserviceBody.ID + '\', fileservice_response = \'' + body + '\' where id = ' + elements.id;


                        client.query(updateId, (err, res) => {

                            totalElements = totalElements - 1;

                            if (err) {
                                console.error('ID update failed:', err);
                            }

                            console.log(totalElements);
							
						// If we have posted all the files, close connection
                            if (totalElements <= 0) {
                                client.end();
                            }


                        });

                    }

                });
        });

    });


// Simple function to validate if reponse is valid json
function IsJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}






