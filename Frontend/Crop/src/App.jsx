// /* eslint-disable react-hooks/exhaustive-deps */
// /* eslint-disable no-unused-vars */
// // eslint-disable-next-line no-unused-vars
// import React, { useEffect, useState } from "react";
// import Dashboard from "./Pages/Dashboard.jsx";
// // import DiseaseDetection from "./Pages/DiseaseDetection.jsx"
// // import FirstPage from "./Pages/FirstPage.jsx"
// // import OurTeam from "./Pages/OurTeam.jsx"
// // import OurServices from "./Pages/OurServices.jsx"
// // import Navbar from "./Components/Navbar.jsx"
// import getFormattedWeatherData from "./weatherService";

// export default function Homepage() {
//   const [weather, setWeather] = useState(null);
//   const fetchWeather = async () => {
//     await getFormattedWeatherData({ q: "dhulikhel" }).then((data) => {
//       setWeather(data);
//     });
//   };
//   fetchWeather();
//   console.log(weather);
//   return (
//     <div>
//       {/* Yaha Jun MA Aafule Kam Garexa Tyo Wala Component matra rakha aru comment gara below
//      // <Navbar/>
//     // <FirstPage/>
//     // <OurServices/>

//     // <DiseaseDetection/>*/}
//       <Dashboard title="3 hour forecast" data={weather.threeHourly} />
//     </div>
//   );
// }

/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Dashboard from "./Pages/Dashboard.jsx";
import getFormattedWeatherData from "./weatherService";

export default function Homepage() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const data = await getFormattedWeatherData({ q: "dhulikhel" });
      setWeather(data);
    };

    fetchWeather();
  }, []);

  console.log(weather);

  return (
    <div>
      {/* Yaha Jun MA Aafule Kam Garexa Tyo Wala Component matra rakha aru comment gara below 
     // <Navbar/>
    // <FirstPage/>
    // <OurServices/>
    
    // <DiseaseDetection/>*/}
      {weather && (
        <Dashboard
          title="3 hour forecast"
          data={weather.formattedForecastWeather.threeHourly}
        />
      )}
    </div>
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
