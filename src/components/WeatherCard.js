import React, { useState, useEffect } from 'react';
import "./weatherCard.css";
import night from "../images/night.jpg";
import day from "../images/day.jpg";

function WeatherCard(props) {
  const [weatherData, setWeatherData] = useState(null);
  const [isDay, setIsDay] = useState(true);
  const [city, setCity] = useState("Skopje");
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

  useEffect(() => {
    async function fetchWeatherData() {
      try {
        const response = await fetch(
          `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=7&aqi=no&alerts=no`,
          { mode: 'cors' }
        );
        const data = await response.json();
        setWeatherData(data);
        console.log(weatherData);

      } catch (error) {
        console.log('Error:', error);
      }
    }
    fetchWeatherData();
  }, []);

  useEffect(() => {
    if (weatherData && weatherData.current.is_day === 0) {
      setIsDay(false);
    } else if (weatherData && weatherData.current.is_day ===1 ) {
      setIsDay(true);
    }
  
    console.log(weatherData?.current?.isDay, isDay);
  }, [isDay, weatherData]);


  return (
    <div className="news-card5">
      {weatherData && (
        <div
          className="weather-card"
          style={
            isDay
              ? { backgroundImage: `url(${day})` }
              : { backgroundImage: `url(${night})` }
          }
        >
          <div className="weather-header">
            <p className='weather-city'>{weatherData.location.name}</p>
            <div className="condition-details">
              <p className='weather-temperature'>{weatherData.current.temp_c} °C</p>
              <img src={weatherData.current.condition.icon} alt="condition" ></img>
            </div>
          </div>
          <div className='weather-details'>
            <div className='low-high weather-detail'>
              <span>{weatherData.forecast.forecastday[0].day.maxtemp_c} / {weatherData.forecast.forecastday[0].day.mintemp_c}</span>
              <p>Hi / Lo</p>
            </div>
            <div className='feels-like weather-detail'>
              <span>{weatherData.current.feelslike_c}</span>
              <p>Feels like</p>
            </div>
            <div className='humidity weather-detail'>
              <span>{weatherData.current.humidity} %</span>
              <p>Humidity</p>
            </div>
            <div className='precipitation weather-detail'>
              <span>{weatherData.current.precip_mm} mm</span>
              <p>Precipitation</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default WeatherCard;
