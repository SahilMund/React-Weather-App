import React, { useEffect, useState } from "react";

import { FaTemperatureHigh, FaTint, FaWind } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import "../styles/forecast.css";

const Forecast = () => {
  const { forecast } = useSelector((state) => state.weather);
  const { units } = useSelector((state) => state.weather);

  // Keeping the record of class which needs to be use for Tab Panel along with the active one's ID to show/hide it.
  const [displayClass, setDisplayClass] = useState("none");
  const [id, setId] = useState(0);

  // setting which unit needs to be shown
  const unit = units === "metric" ? "°C" : "°F";

  // Format the date timestamp as day
  const formatDateToDay = (dt) => {
    const date = new Date(dt);
    return date.toLocaleDateString("en-US", { weekday: "short" });
  };

  const handleShowTabList = (idx) => {
    // If the user clicked on the active tab , then hide the tab Panel
    if (idx === id) {
      setDisplayClass(displayClass === "block" ? "none" : "block");
    } else {
      // else, show the panel
      setDisplayClass("block");
    }
    setId(idx);
  };

  return (
    <div className="card-body p-0">
      <Tabs className="center-tabs">
        <TabList className="d-flex justify-content-around">
          {forecast.filteredForeCastData.map((item, idx) => (
            <Tab onClick={() => handleShowTabList(idx)} key={idx}>
              <div className="weakly-weather-item">
                <p className="mb-0"> {formatDateToDay(item.dt_txt)}</p>
                <img
                  //   src={fetchWeatherAPIIcon(item.weather[0].icon)}
                  src={`/icons/${item.weather[0].icon}.png`}
                  alt="Tab icon"
                  className="tab-icon"
                />
                <p className="mb-0">
                  <span>
                    {Math.round(item.main.temp)}
                    {unit}
                  </span>
                </p>
              </div>
            </Tab>
          ))}
        </TabList>

        {forecast.filteredForeCastData.map((item, idx) => (
          <TabPanel style={{ display: `${displayClass}` }} key={idx}>
            <hr/>
            <div className="forecast-details-container">
              <div className="forecast-details row justify-content-center">
                <div className="col-12 col-sm-6">
                  {" "}
                  <div className="detail">
                   <FaTemperatureHigh />
                    
                    <span>{Math.round(item.main.temp)}°C</span>
                  </div>
                  <div className="detail">
                    <FaTint />
                    <span>{item.main.humidity}%</span>
                  </div>
                  <div className="detail">
                    <FaWind />
                    <span>{Math.round(item.wind.speed)} km/h</span>
                  </div>
                </div>
                <div className="col-12 col-sm-6">
                  <div className="detail">
                    <span>Visibility</span>
                    <span>{Math.round(item.visibility / 1000)} km</span>
                  </div>
                  <div className="detail">
                    <span>Description</span>
                    <span>{item.weather[0].description}</span>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default Forecast;
