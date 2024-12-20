import React, { useState, useEffect } from "react";

import './../styles/App.css';

const App = () => {
    const [weather, setWeatherData] = useState({
      temperature: 25,
      conditions: "Sunny"
    });

    const temperatureColor = weather.temperature > 20 ? 'red' : 'blue';
    const { temperature, conditions } = weather;
  return (
    <div>
        {/* Do not remove the main div */}
    
        <div className="weather-display">
          <h2>Current Weather</h2>
          <p>
            <span style={{ color: temperatureColor }}>
              {temperature}°C
            </span>
          </p>
        </div>
    </div>
  )
}

export default App
