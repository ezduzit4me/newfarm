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
  
  export default function Maintenance() {
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
       <h1 className="logo">&nbsp;&nbsp;&nbsp;Maintenance</h1>
       <button className= "btn" onClick={signOut}>Sign out</button> 
     </div>
   </div>
   <section className="showcase">
     <div className="container">
         <div className="grid">
           <div className="grid-item-1">
             <div className="showcase-text">
               <h1> &nbsp;&nbsp;&nbsp;Shared Responsibility</h1>
               <p className="supporting-text"></p>
             </div>
             <div className="showcase-form">
               
               
             </div>
           </div>
   
           <div className="grid-item-2">
             <div className="image">
               <img src="https://cunninghamapartments.imgix.net/Maintenance.jpg" alt="" />
             </div>
           </div>
        </div>
   
        </div>
   </section> 
   <section className="stats">
           <div className="flex">
             <div className="stat">
               <i className="fa fa-folder-open fa-2x" aria-hidden="true"></i>
               <h3 className="title">Division of responsibility</h3>
               <p class="text">As a general rule owners are responsible for repairs and maintenance of their apartments. The body corporate is responsible for building maintenance. There can be dispute around the boundaries of this definition eg damage to your apartment front door. The Body Corporate in concert with the regulations will rule on contentious situations.</p>
               <h3 className="title">Insurance</h3>
         <p className="text"> Should you have any queries the building insurance policy can be viewed on Slack and your Committee can answer any further questions</p>
            
             </div>
             
             
           </div>
         </section>    
   
         
           </div>
            )}
          </Authenticator>
        </Flex>
        <View height="100vh">
          <Image
            src="https://cunninghamapartments.imgix.net/Cunningham_ext_5.jpg?auto=format,compress"
            width="100%"
            height="100%"
            objectFit="cover"
          />
        </View>
      </Grid>
    );
  }