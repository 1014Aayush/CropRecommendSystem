import React from "react";
import "./CSSFiles/OurServices.css"
import moisture from "../assets/images/moisicon.png"


export default function OurServices()
{
    return(
        
        <>
        <div className="services">
            <div className="Topic">
            <p>What do we offer?</p>
            </div>

                 <div className="cards">

                    <div className="card1">
                        <div className="header-text">
                        <p>SOIL DATA VISUALIZATION</p></div>
                        <div className="Horizontal-line">
                        </div>
                        <div className="desc">
                            <div className="point1">
                                    <div className="point1desc">
                                    <img className="img2" src = {moisture}/>
                                    <p>Moisture data</p> 
                                    </div>  
                            </div>
                            <div className="point2">
                            <div className="point1desc">
                                    <img className="img2" src = {moisture}/>
                                    <p>Humidity data</p> 
                                    </div>
                            </div>
                            <div className="point3">
                            <div className="point1desc">
                                    <img className="img2" src = {moisture}/>
                                    <p>Soil data</p> 
                                    </div>
                            </div>
                        </div>
                    </div>

                    <div className="card2">
                        <div className="header-text">
                        <p> CROP SUGGESTION</p></div>
                        <div className="Horizontal-line">
                        </div>
                        <div className="p1">
                       <p>Tailored crop suggestions for optimal yield and sustainability.</p>
                        </div>

                        <img className="img2" src = {moisture}/>

                        {/* <div className="p2">
                            <p> Card 2 point no 2</p>
                            
                        </div>

                        <div className="p3">
                            <p>card 2 point 3</p>
                        </div> */}
                    </div>
                    <div className="card3"><div className="header-text">

                        <p>YIELD PREDICTION</p></div>
                        <div className="Horizontal-line">
                        </div>
                        <div className="p31">
                        <img className="img2" src = {moisture}/>
                            <p>
                             Forecast future harvests with precision.
                            </p>
                        </div>

                        
                    </div>


            
            

            
        </div>



        </div>
       

        


        </>
    );
}