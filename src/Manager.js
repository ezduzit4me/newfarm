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
  
  export default function Manager() {
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
       <h1 className="logo">&nbsp;&nbsp;&nbsp;Manager</h1>
       <button className= "btn" onClick={signOut}>Sign out</button> 
     </div>
   </div>
   <section className="showcase">
     <div className="container">
         <div className="grid">
           <div className="grid-item-1">
             <div className="showcase-text">
               <h1>&nbsp;&nbsp;&nbsp;Adrian Bullock</h1>
               <p className="supporting-text"></p>
             </div>
             <div className="showcase-form">
               
               
             </div>
           </div>
   
           <div className="grid-item-2">
             <div className="image">
               <img src="https://cunninghamapartments.imgix.net/Manager.png?w=120" alt="" />
             </div>
           </div>
        </div>
   
        </div>
   </section> 
   <section className="stats">
           <div className="flex">
             <div className="stat">
               <i className="fa fa-folder-open fa-2x" aria-hidden="true"></i>
               <h3 className="title">Responsibilities</h3>
               <p className="text">Our Building Manager is employed on a long term basis to manage the property. Adrian does not live on the premises but can be called out in cases of urgency</p>
             <p className="text">He is responsible for building repairs and rectifications and in conjunction with the Committee for long term projects</p>
             <h3 className="title">Contact Details</h3>
            <p className="text"> Email: adrian@caretaker1.com.au </p>
             </div>
             
             
           </div>
         </section>    
   
        
           </div>
            )}
          </Authenticator>
        </Flex>
        <View height="100vh">
          <Image
            src="https://cunninghamapartments.imgix.net/Cunningham_ext_11.jpg"
            width="100%"
            height="100%"
            objectFit="cover"
          />
        </View>
      </Grid>
    );
  }