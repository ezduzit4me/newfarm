import { Link} from 'react-router-dom';


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
      height= "1200px"
      box-shadow= "2px 2px 5px rgba(0,0,0,0.03)"
      border-radius= "4px"
      justifyContent="center"
      align-items="center"
    >
      
      
      <div class="navbar">
        <div class="container flex">
        <nav>
          <ul>
      <li class="nav"><Link to= "utility">Utilities</Link></li>
      <li class="nav"><Link to= "pet">Pets</Link></li>
      <li class="nav"><Link to= "contact">Contact</Link></li>
      <li class="nav"><Link to= "committee">Committee</Link></li>
      <li class="nav"><Link to= "manager">Manager</Link></li>
      <li class="nav"><Link to= "maintenance">Maintenance</Link></li>
       <li class="nav"><Link to= "financial">Financial</Link></li>
      </ul>
      </nav>
      </div>
      </div>
     
      
      </Flex>
        <View height="100vh">
          <Image
            src="https://cunninghamapartments.imgix.net/Cunningham_ext_14.jpg"
            width="100%"
            height="100%"
            objectFit="cover"
          />
        </View>
      </Grid>
  );
}


