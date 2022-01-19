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
       <h1 className="logo">Manager</h1>
         
     </div>
   </div>
   <section className="showcase">
     <div className="container">
         <div className="grid">
           <div className="grid-item-1">
             <div className="showcase-text">
               <h1>Adrian</h1>
               <p className="supporting-text">Introduce yourself</p>
             </div>
             <div className="showcase-form">
               
               
             </div>
           </div>
   
           <div className="grid-item-2">
             <div className="image">
               <img src="https://cunninghamapartments.imgix.net/Manager.png" alt="" />
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
               <p className="text">TBA</p>
             <p className="text"> TBA</p>
            <p className="text"> TBA</p>
             </div>
             
             
           </div>
         </section>    
   
             <button onClick={signOut}>Sign out</button>
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