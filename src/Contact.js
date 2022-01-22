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
  
  export default function Contact() {
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
      <h1 className="logo">&nbsp;&nbsp;&nbsp;Contacts</h1>
      <button className= "btn" onClick={signOut}>Sign out</button> 
    </div>
  </div>
  <section className="showcase">
    <div className="container">
        <div className="grid">
          <div className="grid-item-1">
            <div className="showcase-text">
              <h1>&nbsp;&nbsp;&nbsp;Keep in the picture</h1>
              <p className="supporting-text">&nbsp;&nbsp;&nbsp;Use our Slack Facility</p>
            </div>
            <div className="showcase-form">
              
              
            </div>
          </div>
  
          <div className="grid-item-2">
            <div className="image">
              <img src="https://cunninghamapartments.imgix.net/Slack.png" alt="" />
            </div>
          </div>
       </div>
  
       </div>
  </section> 
  <section className="stats">
          <div className="flex">
            <div className="stat">
              <i className="fa fa-folder-open fa-2x" aria-hidden="true"></i>
              <h3 className="title">Slack</h3>
              <p className="text">Slack is groupware which enables you to read and discuss our local issues</p>
            <p className="text">Slack enables you to communicate person to person or as a group</p>
            <h3 className="title">Join</h3>
           <p className="text"> You wish to be on Slack? Send your email to committee@cunninghamapartments.net</p>
            </div>
            
            
          </div>
        </section>    
  
        
          </div>
            )}
          </Authenticator>
        </Flex>
        <View height="100vh">
          <Image
            src="https://cunninghamapartments.imgix.net/Cunningham_ext_3.jpg"
            width="100%"
            height="100%"
            objectFit="cover"
          />
        </View>
      </Grid>
    );
  }