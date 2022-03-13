import { Authenticator } from "@aws-amplify/ui-react";
import Amplify, { Auth } from 'aws-amplify'
import { Routes,Route } from "react-router-dom";
import Utility from './Utility'
import Maintenance from './Maintenance'
import Financial from './Financial'
import Committee from './Committee'
import Flood from './Flood'
import Contact from './Contact'
import Pet from './Pet'
import Manager from './Manager'
import Home from './Home'
import {useState, useEffect} from 'react'
import Navbar from './Navbar';
import "./styles.css";
import "./newstyles.css";
import awsExports from "./aws-exports";
Amplify.configure(awsExports);

export default function App() {
 
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then(() => {
        setIsAuthenticated(true)
      })
      .catch(err => setIsAuthenticated(false))
  }, [])

   
  return  (
    <Authenticator>
    {({ signOut, user }) => (
      <div className="App">
       if {!isAuthenticated} {
         <Navbar />
       }
  <Routes>
          <Route path="/" element=  {<Home/>} /> 
          <Route path="/utility" element= {<Utility/>} />  
          <Route path="/maintenance" element= {<Maintenance/>} />
          <Route path="/financial" element= {<Financial/>} />
          <Route path="/committee" element= {<Committee/>} />
          <Route path="/contact" element= {<Contact/>} />
          <Route path="/pet" element= {<Pet/>} />
          <Route path="/manager" element= {<Manager/>} />
          <Route path="/flood" element= {<Flood/>} />
    </Routes>  
    </div> 
)}


    </Authenticator>

    );
   
   
  }

  