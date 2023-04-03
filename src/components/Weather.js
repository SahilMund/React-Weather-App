import React from "react";
import { useSelector } from "react-redux";

import WeatherDetails from "./WeatherDetails";
import { CurrentWeather, Forecast } from "./index";

import "../styles/weather-card.css";

const Weather = () => {
  const { currentWeather: weather, units } = useSelector(
    (state) => state.weather
  );

  // To add a filter to the background image according to the temperature threshold
  const formatBackground = () => {
    if (!weather) return "";
    const threshold = units === "metric" ? 20 : 60;
    if (weather.temp <= threshold) return "sepia(50%) hue-rotate(30deg)";

    return "brightness(100%) saturate(120%) hue-rotate(15deg)";
  };

  return (
    <div className="page-content page-container" id="page-content">
      <div className="padding">
        <div className="row container d-flex align-items-start justify-content-center mt-3">
          <div className="col-lg-8 grid-margin stretch-card">
            <div className="card card-weather">
              <div className="card-body" style={{ filter: formatBackground() }}>
                <CurrentWeather />
                <WeatherDetails />
              </div>
              <Forecast />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
