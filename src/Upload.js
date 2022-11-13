import React, { useState } from "react";
import { Container, Menu } from 'semantic-ui-react';
import { Link } from "@reach/router";

import { withAuthenticator } from '@aws-amplify/ui-react';
import { Storage } from "aws-amplify";
import useAmplifyAuth from './useAmplifyAuth';

export const UserContext = React.createContext();

function Upload() {
    const { state: { user }, onSignOut } = useAmplifyAuth();

    function UserData(props) {
        return !user ? (
            <div></div>
        ) : (
                <div>Welcome {user.username} (<Link to="/" onClick={onSignOut}>Sign Out</Link>)</div>
            );
    }

    const [loading, setLoading] = useState(false);

    const handleChange = async (e) => {
        const fileContent = e.target.files[0]
        /*const fileName = e.target.files[0].name*/
        const fileType = e.target.files[0].type

        let ext = fileContent.name.split(".").pop().toLowerCase();
        let fileFormats = ["csv"];
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
            <Menu fixed='top' borderless inverted>
                <Container>
                    <Menu.Item as={Link} to='/' header>
                        Amplify S3 Uploader
            </Menu.Item>

                    <Menu.Menu position='right'>
                        <Menu.Item>
                            <UserData></UserData>
                        </Menu.Item>
                    </Menu.Menu>
                </Container>
            </Menu>

            <Container text style={{ marginTop: '5em' }}>
                <UserContext.Provider user={user}>
                    <div className="App">
                        <h1> Upload CSV File to S3 </h1>
                        {loading ? <h3>Uploading...</h3> : <input
                            type="file" accept="text/csv"
                            onChange={(evt) => handleChange(evt)}
                        />}
                    </div>
                </UserContext.Provider>
            </Container>
        </div>

    );
}

// withAuthenticator wraps your App with a Login component
export default withAuthenticator(Upload);