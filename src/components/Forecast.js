import React, { useEffect } from "react";

import M from "materialize-css";
import { fetchWeatherAPIIcon } from "../services";
import { useSelector } from "react-redux";

const Forecast = () => {
  const { forecast } = useSelector((state) => state.weather);

  useEffect(() => {
    const elem = document.querySelector(".collapsible");
    const options = {
      accordion: false,
    };
    M.Collapsible.init(elem, options);
  }, []);

  const formatDateToDay = (dt) => {
    const date = new Date(dt);
    return date.toLocaleDateString("en-US", { weekday: "long" });
  };
  return (
    <ul className="collapsible expandable popout">
      {forecast.filteredForeCastData.map((item, idx) => (
        <li key={idx}>
          <div className="collapsible-header">
            <img
              src={fetchWeatherAPIIcon(item.weather[0].icon)}
              className="icon-small"
              alt="weather"
            />

            <div className="daily-item">
              <label className="day">{formatDateToDay(item.dt_txt)}</label>
              <label className="description">
                {item.weather[0].description}
              </label>

              <label className="min-max">
                {Math.round(item.main.temp_max)}°C /
                {Math.round(item.main.temp_min)}°C
              </label>
            </div>
          </div>
          <div className="collapsible-body">
            {" "}
            <div className="daily-details-grid">
              <div className="daily-details-grid-item">
                <label>Pressure:</label>
                <label>{item.main.pressure}</label>
              </div>
              <div className="daily-details-grid-item">
                <label>Humidity:</label>
                <label>{item.main.humidity}</label>
              </div>
              <div className="daily-details-grid-item">
                <label>Clouds:</label>
                <label>{item.clouds.all}%</label>
              </div>
              <div className="daily-details-grid-item">
                <label>Wind speed:</label>
                <label>{item.wind.speed} m/s</label>
              </div>
              <div className="daily-details-grid-item">
                <label>Sea level:</label>
                <label>{item.main.sea_level}m</label>
              </div>
              <div className="daily-details-grid-item">
                <label>Feels like:</label>
                <label>{item.main.feels_like}°C</label>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Forecast;
