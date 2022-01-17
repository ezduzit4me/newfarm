import React from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import  Utility from "./Utility";
import Home  from "./Home";
export default function Router () {

<BrowserRouter>
      <Routes>
          <Route path="/" element= {<Home />}>
          <Route path="/utility" element= {<Utility />} />
          </Route>
        </Routes>
      </BrowserRouter>

}