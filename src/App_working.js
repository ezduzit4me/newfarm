

import { useAuthenticator } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import { Routes,Route } from "react-router-dom";
import Utility from './Utility'
import Maintenance from './Maintenance'
import Financial from './Financial'
import Committee from './Committee'
import Contact from './Contact'
import Pet from './Pet'
import Manager from './Manager'
import Home from './Home'
import { Login } from "./Login";

import "./styles.css";
import "./newstyles.css";
import awsExports from "./aws-exports";
Amplify.configure(awsExports);

export default function App() {
 
  const { user } = useAuthenticator();
  
  
  

  if (user)   {
     
    return  (
  <Routes>
          <Route path="/" element=  {<Home/>} /> 
          <Route path="/utility" element= {<Utility/>} />  
          <Route path="/maintenance" element= {<Maintenance/>} />
          <Route path="/financial" element= {<Financial/>} />
          <Route path="/committee" element= {<Committee/>} />
          <Route path="/contact" element= {<Contact/>} />
          <Route path="/pet" element= {<Pet/>} />
          <Route path="/manager" element= {<Manager/>} />
    </Routes>   

    );
    
  }

  return <Login />;
}