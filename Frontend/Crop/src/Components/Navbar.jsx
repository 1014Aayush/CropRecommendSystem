
import React from 'react'
import '../Pages/CSSFiles/Navbar.css'
import logo from "../assets/images/a.png"
import {Link} from "react-router-dom"
import React from "react";


const Navbar = () => {
  return (
    <div className='navbar-container'>
    <img className='logo' src={logo} alt="Krishi-Dristi" 
       height= "80px"
       width= "75px"
      />
      <div className="a-container">
        <a href ='../Pages/FirstPage.jsx'>Home</a> 
        <a href='../Pages/Dashboard.jsx'>Dashboard</a> 
        <a href=''>Predict</a> 
        <a href='../OurServices.jsx'>AboutUs</a>
      </div>
    </div>
  )
}

export default Navbar
