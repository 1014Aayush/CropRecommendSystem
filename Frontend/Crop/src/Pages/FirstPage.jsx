import React from "react";
import "./CSSFiles/FirstPage.css"
import image from "../assets/images/treetree.png";
import soil from "../assets/images/soil.png"
export default function FirstPage()
{
    return(
        
        <>
        <div className="first-page">
            <h1 className="header" id="header-line">
                    Reignitin<span className="header-opacity">g Agr</span>iculture<br/>
                    With S<span className="header-opacity">mart Far</span>ming
            </h1>
            <img src={image} alt="" className="tree-image"/>
            <img src={soil} alt="" className="soil"/>
        </div>
       
        </>
    );
}