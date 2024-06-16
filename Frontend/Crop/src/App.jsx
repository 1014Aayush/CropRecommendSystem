// eslint-disable-next-line no-unused-vars
import React from "react";

import Dashboard from "./Pages/Dashboard.jsx"
import DiseaseDetection from "./Pages/DiseaseDetection.jsx"
import FirstPage from "./Pages/FirstPage.jsx"
import OurTeam from "./Pages/OurTeam.jsx"
import OurServices from "./Pages/OurServices.jsx"
import Navbar from "./Components/Navbar.jsx"
import graph from "./Pages/graph.jsx" 
import './App.css'


export default function Homepage()
{
  return(
  <div>

    

   
   
  <Navbar/>
  <FirstPage/>
  <OurServices/> 
  <OurTeam/>
  <Dashboard/>
  <DiseaseDetection/> 
  <graph/>
 
 

  </div>

  );
}