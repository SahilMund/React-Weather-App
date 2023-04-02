import React, { useEffect, useState } from "react";
import { formatTimeStampToLocalTime } from "../services";
import { useDispatch, useSelector } from "react-redux";
import { manageUnits } from "../redux/actions/weatherAction";

const TimeAndButton = () => {
  const {  currentWeather : weather } = useSelector(
    (state) => state.weather
  );
  const dispatch = useDispatch();

  const handleUnitsChange = (e) => {
    const selectedUnit = e.currentTarget;

    selectedUnit.checked
      ? dispatch(manageUnits("imperial"))
      : dispatch(manageUnits("metric"));
  };

  return (
    <div className="flex flex-row w-1/4 items-center justify-center">
      <div className="switch">
        <label>
          °C
          <input type="checkbox" onClick={handleUnitsChange} />
          <span className="lever"></span>
          °F
        </label>
      </div>

      <p className="text-white text-xl font-extralight">
        {formatTimeStampToLocalTime(weather.date, weather.timezone)}
      </p>
    </div>
  );
};

export default TimeAndButton;
