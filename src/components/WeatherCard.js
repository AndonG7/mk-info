import React, { useState, useEffect } from 'react';

function WeatherCard(props) {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    async function fetchWeatherData() {
      try {
        const response = await fetch(
          `http://api.weatherapi.com/v1/forecast.json?key=fb045db9b33948df818113311232502&q=Skopje&days=7&aqi=no&alerts=no`,
          { mode: 'cors' }
        );
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.log('Error:', error);
      }
    }
    fetchWeatherData();
  }, []);

  return (
    <div className="WeatherCard">
      <h1>Weather Data</h1>
      {weatherData && (
        <div>
          <p>Location: {weatherData.location.name}</p>
          <p>Temperature: {weatherData.current.temp_c} C</p>
          <p>Condition: {weatherData.current.condition.text}</p>
        </div>
      )}
    </div>
  );
}

export default WeatherCard;





