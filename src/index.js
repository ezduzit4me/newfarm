import { AmplifyProvider, Authenticator } from "@aws-amplify/ui-react";
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import {  BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Navbar';
import App from "./App";



const rootElement = document.getElementById("root");
ReactDOM.render(


  <StrictMode>
   
    <AmplifyProvider>
      <Authenticator.Provider>
      <Router>
        <Navbar />
        <App />
       </Router>

      </Authenticator.Provider>
    </AmplifyProvider>
    
  </StrictMode>,

  
  rootElement
);