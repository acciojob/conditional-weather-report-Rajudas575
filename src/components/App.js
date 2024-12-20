import React, { useState, useEffect } from "react";

import './../styles/App.css';

const App = () => {
    const [weather, setWeatherData] = useState({
      temperature: 25,
      conditions: "Sunny"
    });

    const temperatureColor = weather.temperature > 20 ? 'red' : 'blue';
    
  return (
    <div>
        {/* Do not remove the main div */}
    
      <div className="container">
      <h1 className="header">Weather App</h1>
      <div className="weatherCard">
        <h2 className="temperature">
          {weather.temperature}°C
        </h2>
        <p className="conditions">{weather.conditions}</p>
      </div>
    </div>
    </div>
  )
}

export default App
