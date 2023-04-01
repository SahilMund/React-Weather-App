import React from 'react'
import "./weather.css";
import { fetchWeatherAPIIcon } from '../../services/';

const Weather = ({data}) => {

  const {
    city,
    lat,
    lon,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    name,
    date,
    country,
    sunrise,
    sunset,
    weatherStatus,
    pressure,
    icon,
    units,
    speed,
    weatherDescription
  } = data;

 
  return (
    <div className='app__weather-container'>
     <div className="top">
        <div>
          <p className="city">{city}</p>
          <p className="weather-description">{weatherDescription}</p>
        </div>
        <img
          alt="weather"
          className="weather-icon"
          
          src={fetchWeatherAPIIcon(icon)}
        />
      </div>
      <div className="bottom">
        <p className="temperature">{Math.round(temp)}{units === 'metric' ? '°C' : '°F'}</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value">
             {Math.round(feels_like)}{units === 'metric' ? '°C' : '°F'}
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">{speed} m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">{humidity}%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">{pressure} hPa</span>
          </div>
        </div>
      </div></div>
  )
}

export default Weather