import React from "react";
import "../styles/weathers.css";
import { fetchWeatherAPIIcon } from "../services";
import { useSelector } from "react-redux";
import { getTemperatureColor } from "../services/constants";

const Weathersss = () => {
  const { units, currentWeather } = useSelector((state) => state.weather);

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
    weatherDescription,
  } = currentWeather;

  return (
    <div className="container">
      <div className="widget">
        <div className="details">
          <div className="temperature">{temp.toFixed()}</div>
          <div className="summary">
            <p className="summaryText">Mostly Cloudy</p>
          </div>
          <div className="precipitation">Precipitation: 20%</div>
          <div className="wind">Wind: 3 mph</div>
        </div>
        <div className="pictoBackdrop"></div>
        <div className="pictoFrame"></div>
        <div className="pictoCloudBig"></div>
        <div className="pictoCloudFill"></div>
        <div className="pictoCloudSmall"></div>
        <div className="iconCloudBig"></div>
        <div className="iconCloudFill"></div>
        <div className="iconCloudSmall"></div>
      </div>
    </div>
  );
};

export default Weathersss;
