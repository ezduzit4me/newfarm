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
      <h2>Hello {user.username}</h2><br></br>
    
      
      <pr> This is the information site for Cunningham apartments being currently constructed.&nbsp;</pr>
      <pr>From this page you will be able to link to topical aspects, conditions</pr>
      <pr> and benefits of living at Cunningham -watch this space</pr>
      </div>
      
      <button onClick={signOut}>Sign out</button>
      </Flex>
        <View height="100vh">
          <Image
            src="https://cunninghamapartments/Cunningham_shade.jpg"
            width="100%"
            height="100%"
            objectFit="cover"
          />
        </View>
      </Grid>
  );
}