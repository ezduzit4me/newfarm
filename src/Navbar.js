import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
   return (
      <div>
         <Link to={"/"}>Home (Public)</Link>
         <Link to={"/contact"}> Contact (Public) </Link>
         <Link to={"/comms"}>Communications (Protected)</Link>
      </div>
   );
}

export default Navbar; 