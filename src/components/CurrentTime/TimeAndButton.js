import React from "react";
import { formatTimeStampToLocalTime } from "../../services";

const TimeAndButton = ({ setUnits , weather}) => {

    console.log(weather.date, weather.timezone);
    console.log(formatTimeStampToLocalTime(weather.date, weather.timezone));
  const handleUnitsChange = (e) => {
    const selectedUnit = e.currentTarget;

    if (selectedUnit.checked) setUnits("imperial");
    else setUnits("metric");
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
