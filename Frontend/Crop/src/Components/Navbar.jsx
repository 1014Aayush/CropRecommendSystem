/* eslint-disable no-unused-vars */

import React from 'react'
import '../Pages/CSSFiles/Navbar.css'
import logo from "../assets/images/a.png"
import {BrowserRouter, Link} from "react-router-dom"
import { HashLink } from "react-router-hash-link";



const Navbar = () => {   
  return (
    <BrowserRouter>
    <div className='navbar'>
    <div className='navbar-container'>
    <img className='logo' src={logo} alt="Krishi-Dristi" 
       height= "80px"
       width= "75px"
      />
      <div className="a-container">

      <HashLink   to='#home' smooth >Home </HashLink>
      <HashLink  to='#service' smooth >Our Services </HashLink>
      <HashLink  to='#dashboard' smooth >Dashboard </HashLink>
      <HashLink  to='#team' smooth >Our Team</HashLink>
      

      </div>
    </div>
    </div>
    </BrowserRouter>
  )
}

export default Navbar
