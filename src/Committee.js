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
  
  export default function Committee() {
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
       <h1 className="logo">Committee</h1>
       <button className= "btn" onClick={signOut}>Sign out</button> 
     </div>
   </div>
   <section className="showcase">
     <div className="container">
         <div className="grid">
           <div className="grid-item-1">
             <div className="showcase-text">
               <h1>&nbsp;&nbsp;&nbsp;Participate</h1>
               <p className="supporting-text">&nbsp;&nbsp;&nbsp;...In Your Environment</p>
             </div>
             <div className="showcase-form">
               
               
             </div>
           </div>
   
           <div className="grid-item-2">
             <div className="image">
               <img src="https://cunninghamapartments.imgix.net/cunningham_220.jpg" alt="" />
             </div>
           </div>
        </div>
   
        </div>
   </section> 
   <section className="stats">
           <div className="flex">
             <div className="stat">
               <i className="fa fa-folder-open fa-2x" aria-hidden="true"></i>
               
               <h3 className="title">Committee</h3>
               <p className="text"> The Committee currently comprises 7 members elected annually at the AGM. Your Slack link will outline the current members, their names and enable you to contact them individually or as a group</p>
               <h3 className="title">Email Contact</h3>
               <p className="text">committee@cunninghamapartments.net</p>
             
             </div>
             
             
           </div>
         </section>    
   
        
           </div>
            )}
          </Authenticator>
        </Flex>
        <View height="100vh">
          <Image
            src="https://cunninghamapartments.imgix.net/Cunningham_ext_2.jpg"
            width="100%"
            height="100%"
            objectFit="cover"
          />
        </View>
      </Grid>
    );
  }