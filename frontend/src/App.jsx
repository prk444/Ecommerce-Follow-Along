import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom"
  // Import the CSS file
import Home from "./pages/Home"
import Login from "./pages/LoginPage"
import Navbar  from  "./pages/Navbar"
function app() {
  return (
     <BrowserRouter>
        <Navbar/>
       <Routes>
            <Route  path="/"  element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>

       </Routes>
     </BrowserRouter>
  );
}

export default app;
