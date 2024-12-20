import React, { useState, useEffect } from "react";

import './../styles/App.css';

const App = () => {
    const [weather, setWeather] = useState({ temperature: 0, conditions: "" });
    const weatherInput = { temperature: 25, conditions: "Sunny" };
    useEffect(() => {
        setWeather(weatherInput);
      }, []);
    const getTemperatureColor = (temp) => {
        return temp > 20 ? 'red' : 'blue';
    };
  return (
    <div>
        {/* Do not remove the main div */}
    
        <div className="App">
          <div className="weather-container">
            <p>
              Temperature: <span style={{ color: getTemperatureColor(weather.temperature) }}>{weather.temperature}°C
                        </span>
            </p></br>
           <p>Conditions: {weather.conditions}</p>
          </div>
        </div>
    </div>
  )
}

export default App
