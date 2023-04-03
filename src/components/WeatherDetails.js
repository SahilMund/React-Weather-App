import React from "react";
import { useSelector } from "react-redux";
import "../styles/weather.css";

const WeatherDetails = () => {
  const { units, currentWeather } = useSelector((state) => state.weather);

  const unit = units === "metric" ? "°C" : "°F";
  const {
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    pressure,
    speed,
    weatherDescription,
  } = currentWeather;
  return (
    <div className="weather-data d-flex flex-column flex-sm-row">
      <div className="mr-auto">
        <h4 className="display-3">
          {Math.round(temp)}
          {unit}
        </h4>
        <p> {weatherDescription}</p>
      </div>
      <div className="bottom">
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">Details</span>

          </div>
          <hr/>
          <div className="parameter-row">
            <span className="parameter-label">Min | Max Temp</span>
            <span className="parameter-value">{temp_min}{unit} | {temp_max}{unit}</span>

          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value">
              {Math.round(feels_like)}
              {unit}
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
      </div>
    </div>
  );
};

export default WeatherDetails;
