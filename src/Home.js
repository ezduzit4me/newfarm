import {
  
  Flex,
  Grid,
  Image,
  useTheme,
  View
} from "@aws-amplify/ui-react";

import { useAuthenticator } from "@aws-amplify/ui-react";





export function Home() {
  const { signOut, user } = useAuthenticator();
  const { tokens } = useTheme();
  return (
    
    <Grid templateColumns={{ base: "1fr 0", medium: "1fr 1fr" }}>
      
    <Flex
    
      backgroundColor={tokens.colors.background.secondary}
      padding= ".5rem"
      height= "300px"
      box-shadow= "2px 2px 5px rgba(0,0,0,0.03)"
      border-radius= "4px"
      justifyContent="center"
      align-items="center"
    >
      
      <div>
    
      <h2>Welcome to Cunningham {user.username}</h2><br></br>
      
      
      <pr> This is an information site for Cunningham Apartments being currently constructed.&nbsp;</pr>
      <pr>You will be able to read about relevant topics by following the links below:</pr>
      <pr> &nbsp;</pr>
      <pr> &nbsp;</pr>
      <pr><h3>Utility Bills</h3></pr>
      <pr> &nbsp;</pr>
      <pr><a href="http://127.0.0.1/utility">Utility</a></pr>
      <pr><h3>Pets Policy</h3></pr>
      <pr> &nbsp;</pr>
      <pr><a href="http://127.0.0.1/pet">Pets</a></pr>
      <pr><h3>Communicate with Residents</h3></pr>
      <pr> &nbsp;</pr>
      <pr><a href="http://127.0.0.1/slack">Slack</a></pr>
      <pr><h3>Committee</h3></pr>
      <pr> &nbsp;</pr>
      <pr><a href="http://127.0.0.1/committee">Utility</a></pr>
      <pr><h3>Manager</h3></pr>
      <pr> &nbsp;</pr>
      <pr><a href="http://127.0.0.1/manager">Manager</a></pr>
      <pr><h3>Maintenance</h3></pr>
      <pr> &nbsp;</pr>
      <pr><a href="http://127.0.0.1/maintenance">Maintenance</a></pr>
      <pr><h3>Financials</h3></pr>
      <pr> &nbsp;</pr>
      <pr><a href="http://127.0.0.1/maintenance">Financial</a></pr>
      </div>
      
      <button onClick={signOut}>Sign out</button>
      
      </Flex>
        <View height="100vh">
          <Image
            src="http://127.0.0.1:3000/Cunningham_shade.jpg"
            width="100%"
            height="100%"
            objectFit="cover"
          />
        </View>
      </Grid>
  );
}

