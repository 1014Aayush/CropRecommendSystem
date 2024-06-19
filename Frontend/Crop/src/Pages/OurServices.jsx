/* eslint-disable no-unused-vars */
import React from "react";
import "./CSSFiles/OurServices.css";
import warm from "../assets/images/Warm.png";
import humidity from "../assets/images/Humidity.png";
import graph from "../assets/images/Graph.png";
import crop from "../assets/images/plant.png";

export default function OurServices() {
  return (
    <section className="App-header" id="service">
      <div className="services">
        <div className="Topic">
          <p>WHAT DO WE OFFER?</p>
        </div>
        <div className="cards">
          <div className="card1">
            <div className="header-text">
              <br />
              <center>
                <p>
                  ENVIRONMENT <br />
                  DATA VISUALIZATION
                </p>
              </center>
            </div>
            <br />
            <br />
            <br />
            <div className="Horizontal-line"></div>
            <br />
            <div >
              <div className="container">
                <img className="image" src={warm} />
                <p>Temperature</p>
              </div>

              <div className="container">
                <img className="image" src={humidity} />
                <p>Humidity</p>
              </div>
            </div>
          </div>

          <div className="card2">
            <div className="header-text">
              <br />
              <p>
                {" "}
                CROP <br />
                RECOMENDATION
              </p>
            </div>
            <br />
            <br />
            <br />
            <div className="Horizontal-line"></div>
            <br />
            <div >
              <center>
                <img className="crop" src={crop} />
              </center>
              <p>
                Tailored crop suggestions for optimal yield and sustainability.
              </p>
            </div>
          </div>
          <div className="card3">
            <div className="header-text">
              <br />
              <p>
                YIELD
                <br />
                PREDICTION
              </p>
            </div>
            <br />
            <br />
            <br />
            <div className="Horizontal-line"></div>
            <br />
            <div >
              <center>
                <img className="graph" src={graph} />
              </center>
              <p>Forecast future harvests with precision.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
