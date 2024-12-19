import React, { useState, useEffect } from "react";
import WeatherDisplay from "./WeatherDisplay";

import './../styles/App.css';

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
      const [weatherData, setWeatherData] = useState({
        temperature: 25,
        conditions: "Sunny",
      });
  
      useEffect(() => {
        setWeatherData({ temperature: "25", conditions: "Sunny" });
      }, []);
      <h1>Weather App</h1>
      <WeatherDisplay weather={weatherData} />
    </div>
  )
}

export default App
