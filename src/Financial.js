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
  
  export default function Financial() {
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
       <h1 className="logo">&nbsp;&nbsp;&nbsp;Financial</h1>
       <button className= "btn" onClick={signOut}>Sign out</button> 
     </div>
   </div>
   <section className="showcase">
     <div className="container">
         <div className="grid">
           <div className="grid-item-1">
             <div className="showcase-text">
               <h1>&nbsp;&nbsp;&nbsp;Statements</h1>
               <p className="supporting-text">&nbsp;&nbsp;&nbsp;...Levies</p>
             </div>
             <div className="showcase-form">
               
               
             </div>
           </div>
   
           <div className="grid-item-2">
             <div className="image">
               <img src="https://cunninghamapartments.imgix.net/Accountant.png" alt="" />
             </div>
           </div>
        </div>
   
        </div>
   </section> 
   <section className="stats">
           <div className="flex">
             <div class="stat">
               <i className="fa fa-folder-open fa-2x" aria-hidden="true"></i>
               <h3 className="title">Levies</h3>
               <p className="text">Your levies go towards maintaining the building not only at present but in the future. Provision for future costs for aging buildings can not be avoided. At Cunningham we have had some significant costs due to improvements and plumbing issues. Hopefully these costs are behind us however at this point beginning of 2022 our sinking funds are depleted and need to be improved.</p>
               <h3 className="title">Statements</h3>
            <p className="text">Monthly income expenditure statements are included in our 'Slack' facility. Consolidated statements are available at AGM time</p>
             </div>
             
             
           </div>
         </section>    
   
         
           </div>
            )}
          </Authenticator>
        </Flex>
        <View height="100vh">
          <Image
            src="https://cunninghamapartments.imgix.net/Cunningham_ext_13.jpg"
            width="100%"
            height="100%"
            objectFit="cover"
          />
        </View>
      </Grid>
    );
  }