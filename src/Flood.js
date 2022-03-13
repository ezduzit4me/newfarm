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
  
  export default function Flood() {
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
       <h1 className="logo">&nbsp;&nbsp;&nbsp;Flood</h1>
       <button className= "btn" onClick={signOut}>Sign out</button> 
     </div>
   </div>
   <section className="showcase">
     <div className="container">
         <div className="grid">
           <div className="grid-item-1">
             <div className="showcase-text">
               <h1> &nbsp;&nbsp;&nbsp;Be Prepared</h1>
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
               <h3 className="title">History</h3>
               <p class="text">Twice in recent times, 2011 and 2022 our basement car park has flooded. These have been the result of rain water accumulating in our sump and not being able to be cleared and water ingress from flooded drains</p>
               <p class="text">Your Committee is instuting actions and procedures to try and prevent this happening but in today's climate change world we must prepare for the worst.</p>
               <h3 className="title">Actions</h3>
         <p className="text"> Some initial actions are:
         <ul>
             <li> -If you are going away leave your car keys with someone local</li>
             <li> -Elevate items in storage lockers as high as possible</li>
             <li> -Prepare for possible loss of power</li>
             <li> -Monitor 'Slack' for the latest information</li>
             <li> -Check personal insurance policy re storage items and food items</li>
        </ul>
        <p class="text">Power Loss </p>
        <ul>
             <li> -Front door locks are disabled</li>
             <li> -Have emergency lighting pre prepared</li>
             <li> -Dont open refrigerator unless absolutely necessary</li>
             <li> -Internet other than mobiles will be unavailable</li>
        </ul>
         </p>
            
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