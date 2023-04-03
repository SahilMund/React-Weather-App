import React from "react";
import { GrMapLocation } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";

import { formatTimeStampToLocalTime } from "../services";
import {
  fetchCurrentWeather,
  fetchWeatherForeCast,
  manageUnits,
} from "../redux/actions/weatherAction";

import "../styles/weather.css";

const CurrentWeather = () => {
  const { currentWeather } = useSelector((state) => state.weather);

  const dispatch = useDispatch();

  // Function to handle an action dispatch to manage/update the unit
  const handleUnitsChange = (unit) => {
    dispatch(manageUnits(unit));
  };

  const getCurrentLocation = () => {
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        const q = {
          type: "CURRENT_LOCATION_WEATHER",
          data: { latitude, longitude },
        };
        dispatch(fetchCurrentWeather(q));
        dispatch(fetchWeatherForeCast(q));

      });
    }
  };

  const { name, city, country } = currentWeather;

  return (
    <div className="weather-date-location d-flex justify-content-between w-100 flex-column flex-sm-row">
      <div className="weather-date-location-data">
        <h3>{city ? city : `${name}, ${country}`}</h3>

        <p className="text-gray">
          <span className="weather-date">
            {formatTimeStampToLocalTime(
              currentWeather.date,
              currentWeather.timezone
            )}
          </span>
        </p>
        <img
          src={`${process.env.PUBLIC_URL}/icons/${currentWeather.icon}.png`}
          alt="Tab icon"
          className="weather-tab-icons"
        />
      </div>

      <div className="button-switch">
      <span onClick={getCurrentLocation}> <GrMapLocation /> </span> 
        <span name="metric" onClick={() => handleUnitsChange("metric")}>
          {" "}
          °C{" "}
        </span>
        <span> | </span>
        <span name="imperial" onClick={() => handleUnitsChange("imperial")}>
          {" "}
          °F{" "}
        </span>
      </div>
    </div>
  );
};

export default CurrentWeather;
