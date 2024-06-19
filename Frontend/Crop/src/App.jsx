/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

import getFormattedWeatherData from "./weatherService";

import Dashboard from "./Pages/Dashboard.jsx";
import DiseaseDetection from "./Pages/DiseaseDetection.jsx";
import FirstPage from "./Pages/FirstPage.jsx";
import OurTeam from "./Pages/OurTeam.jsx";
import OurServices from "./Pages/OurServices.jsx";
import Navbar from "./Components/Navbar.jsx";
import graph from "./Pages/graph.jsx";
import "./App.css";
import { Route, Router } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function Homepage() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const data = await getFormattedWeatherData({ q: "dhulikhel" });
      setWeather(data);
    };

    fetchWeather();
  }, []);

  return (

      <div className="App">
        
        <Navbar/>
        <FirstPage />
        <OurServices />
        <OurTeam />
        {weather && (
          <Dashboard
            title="3 hour forecast"
            data={weather.formattedForecastWeather.threeHourly}
          />
        )}
      </div>

  );
}
