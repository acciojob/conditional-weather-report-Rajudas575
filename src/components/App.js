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
    
      <div style={styles.container}>
      <h1 style={styles.header}>Weather App</h1>
      <div style={styles.weatherCard}>
        <h2 style={{ ...styles.temperature, color: temperatureColor }}>
          {weather.temperature}°C
        </h2>
        <p style={styles.conditions}>{weather.conditions}</p>
      </div>
    </div>
    </div>
  )
}

export default App
