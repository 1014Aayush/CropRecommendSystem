/* eslint-disable no-unused-vars */
import React from "react";
import "./CSSFiles/OurTeam.css";
import aayush from "../assets/images/aayush.jpg";

export default function OurTeam() {
  return (
    <section className="App-header" id="team">
      <div className="DiseaseDetection">
        <div className="Ourteam">
          <div className="Heading2">
            <p>OUR TEAM<div className="Horizontal-line"></div></p>
          </div>

          <div className="MBody">
            <div className="Body">
            <div className="Intro">
            <div className="LIntroD">
              <h1>Mahir Manandhar</h1>
              <p>
                Hey I am Supriya I am the developer and researcher in this
                project
              </p>
            </div>
                <div className="IntroP">
                <div className="circular-container">
                <img className="circular-image" src={aayush}></img>
              </div>
                </div>
              </div>

              <div className="Intro">
                <div className="LIntroD">
                  <h1>Supriya Adhikari</h1>
                  <p>
                    Hey I am Supriya I am the developer and researcher in this
                    project
                  </p>
                </div>

                <div className="IntroP">
                <div className="circular-container">
                <img className="circular-image" src={aayush}></img>
              </div>
                </div>
              </div>
            </div>

            <div className="line"></div>

            <div className="Body">
              <div className="Intro">
                <div className="circular-container">
                  <img className="circular-image" src={aayush}></img>
                </div>

                <div className="RIntroD">
                  <h1>Aayush Pokhrel</h1>
                  <p>
                    Hey I am Aayush I am the developer and researcher in this
                    project
                  </p>
                </div>
              </div>

              <div className="Intro">
                <div className="IntroP">
                <div className="circular-container">
                <img className="circular-image" src={aayush}></img>
              </div>
                </div>
                <div className="RIntroD">
                  <h1>Anusha Rajlawat</h1>
                  <p>
                    Hey I am Anusha I am the developer and researcher in this
                    project
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
