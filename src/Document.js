

import React, { useState } from "react";
import { Container} from 'semantic-ui-react';

// import { listDocuments } from './graphql/queries';
//import { API, graphqlOperation } from 'aws-amplify';

// import { withAuthenticator } from '@aws-amplify/ui-react';
import { Storage } from "aws-amplify";
//import useAmplifyAuth from './useAmplifyAuth';


export const UserContext = React.createContext();

function Document() { 

    

    

        const [loading, setLoading] = useState(false);

        const handleChange = async (e) => {
        const fileContent = e.target.files[0]
       /* const fileName = e.target.files[0].name */
        const fileType = e.target.files[0].type

        let ext = fileContent.name.split(".").pop().toLowerCase();
        let fileFormats = ["pdf"];
        if (!fileFormats.includes(ext)) {
            console.log("Invalid file format");
            return false;
        }

        let fileName =
            "data/" +
            fileContent.name.substr(0, fileContent.name.indexOf(ext) - 1) +
            "." +
            ext;

        try {
            setLoading(true);
            // Upload the file to s3 with private access level.
            await Storage.put(fileName, fileContent, {
                contentType: fileType,
                level: 'private',
                progressCallback(progress) {
                    console.log(`Uploaded: ${progress.loaded}/${progress.total}`);
                },
            })
            setLoading(false);
        } catch (err) {
            console.log(err);
        }
    }



    return (
        <div>
            

            <Container text style={{ marginTop: '5em' }}>
               
               
                    <div className="App">
                    
    
                        <h1> Upload PDF to Amazon S3 </h1>
                        {loading ? <h3>Uploading...</h3> : <input
                            type="file" accept="pdf"
                            onChange={(evt) => handleChange(evt)}
                        />}

 
                    </div>
                
            </Container>
        </div>

    );
    }

// withAuthenticator wraps your App with a Login component
export default Document;