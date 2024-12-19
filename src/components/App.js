import React, { useState, useEffect } from "react";

import './../styles/App.css';

const App = () => {
    const [weatherData, setWeatherData] = useState({
      temperature: 25,
      conditions: "Sunny"
    });

    useEffect(() => {
      setWeatherData({ temperature: 25, conditions: "Sunny" });
    }, []);
  return (
    <div>
        {/* Do not remove the main div */}
    
      <h1>Weather App</h1>
      <WeatherDisplay weather={weatherData} />
    </div>
  )
}

export default App
