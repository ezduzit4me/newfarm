import React from "react";
import { Link } from "react-router-dom";

export function Navbar() {
   return (
      <div>
         <Link to={"/"}>Home (Public)</Link>
         <Link to={"/contact"}> Contact (Public) </Link>
         <Link to={"/utilities"}>Utilities (Protected)</Link>
      </div>
   );
}

export  default Navbar; 