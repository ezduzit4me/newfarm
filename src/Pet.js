import {
    Authenticator,
    Flex,
    Grid,
    Image,
    useTheme,
    View
  } from "@aws-amplify/ui-react";
  
  import { Header } from "./Header";
  import { Footer } from "./Footer";
  
  
  const components = {
    Header,
    
    Footer
  };
  
  export default function Pet() {
    const { tokens } = useTheme();
  
    return (
      <Grid templateColumns={{ base: "1fr 0", medium: "1fr 1fr" }}>
        <Flex
          backgroundColor={tokens.colors.background.secondary}
          justifyContent="center"
        >
          <Authenticator components={components}>
            {({ signOut, user }) => (
              
              <div>
              <div className="navbar">
    <div className="container flex">
      <h1 className="logo">&nbsp;&nbsp;&nbsp;Pets</h1>
      <button className= "btn" onClick={signOut}>Sign out</button> 
    </div>
  </div>
  <section className="showcase">
    <div className="container">
        <div className="grid">
          <div className="grid-item-1">
            <div className="showcase-text">
              <h1>&nbsp;&nbsp;&nbsp;Responsible &nbsp;&nbsp;&nbsp;Ownership</h1>
              <p className="supporting-text">&nbsp;&nbsp;&nbsp;Shared Space</p>
            </div>
            <div className="showcase-form">
              
              
            </div>
          </div>
  
          <div className="grid-item-2">
            <div className="image">
              <img src="https://cunninghamapartments.imgix.net/Dog.png" alt="" />
            </div>
          </div>
       </div>
  
       </div>
  </section> 
  <section className="stats">
          <div className="flex">
            <div className="stat">
              <i className="fa fa-folder-open fa-2x" aria-hidden="true"></i>
              <h3 className="title">Requirements</h3>
              <p className="text">You are required to get approval from the Body Corporate before bringing a pet on a full time basis. Details of the pet are required in particular size and weight.</p>
              <h3 className="title">Behaviour</h3>
            <p className="text">Pet behaviour is a big issue particularly in these times of Covid when we have a significant number of people working from their apartment at all hours. Barking dogs are not tolerated and action will be taken to get you to remove the animal</p>
            <h3 className="title">Dog Parks</h3>
       <p className="text">There is a dog park a couple of blocks away where you have the opportunity to allow your dog to run free. There are also on-leash parks within a short distance</p>
            </div>
            
            
          </div>
        </section>    
  
        
          </div>
            )}
          </Authenticator>
        </Flex>
        <View height="100vh">
          <Image
            src="https://cunninghamapartments.imgix.net/Cunningham_ext_7.jpg"
            width="100%"
            height="100%"
            objectFit="cover"
          />
        </View>
      </Grid>
    );
  }