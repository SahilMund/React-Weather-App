import React from 'react'
import "../styles/weather.css";
import { fetchWeatherAPIIcon } from '../services';
import { useSelector } from 'react-redux';
import { getTemperatureColor } from '../services/constants';

const Weather = () => {

  const { units, currentWeather  } = useSelector((state) => state.weather);

  const {
    city,
    // lat,
    // lon,
    temp,
    feels_like,
    // temp_min,
    // temp_max,
    humidity,
    name,
    // date,
    // country,
    // sunrise,
    // sunset,
    // weatherStatus,
    pressure,
    icon,
    speed,
    weatherDescription
  } = currentWeather;

  const c = 'C';
 
  return (
    <div className='app__weather-container' style={{backgroundColor : getTemperatureColor(temp,'C')}}>
     <div className="top">
        <div>
          <p className="city">{`${name} ${city ? ', '+city : ' '}`}</p>
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