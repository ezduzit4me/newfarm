import { Link } from 'react-router-dom';


import {
  
  Flex,
  Grid,
  Image,
  useTheme,
  View
} from "@aws-amplify/ui-react";

import { useAuthenticator } from "@aws-amplify/ui-react";






export default function Home() {
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
      <pr><Link to= "utility">Utilities</Link></pr>
      <pr><h3>Pets Policy</h3></pr>
      <pr> &nbsp;</pr>
      <pr><Link to= "pet">Pets</Link></pr>
      <pr><h3>Communicate with Residents</h3></pr>
      <pr> &nbsp;</pr>
      <pr><Link to= "contact">Keep in Touch</Link></pr>
      <pr><h3>Committee</h3></pr>
      <pr> &nbsp;</pr>
      <pr><Link to= "committee">Committee</Link></pr>
      <pr><h3>Manager</h3></pr>
      <pr> &nbsp;</pr>
      <pr><Link to= "manager">Manager</Link></pr>
      <pr><h3>Maintenance</h3></pr>
      <pr> &nbsp;</pr>
      <pr><Link to= "maintenance">Maintenance</Link></pr>
      <pr><h3>Financials</h3></pr>
      <pr> &nbsp;</pr>
      <pr><Link to= "financial">Financial</Link></pr>
      </div>
      
      <button onClick={signOut}>Sign out</button>
      
      </Flex>
        <View height="100vh">
          <Image
            src="https://cunninghamapartments.imgix.net/Cunningham_ext_1.jpg"
            width="100%"
            height="100%"
            objectFit="cover"
          />
        </View>
      </Grid>
  );
}


