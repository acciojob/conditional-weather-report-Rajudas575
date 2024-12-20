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
    
        <div className="weather-display">
          <h2>Current Weather</h2>
          <p>
            Temperature:{" "}
            <span style={{ color: temperatureColor }}>
              {temperature}°C
            </span>
          </p>
          <p>Conditions: {conditions}</p>
        </div>
    </div>
  )
}

export default App
