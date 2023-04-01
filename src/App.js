import { useEffect, useState } from "react";
import "./App.css";
import { Forecast, Search, TimeAndButton, Weather } from "./components";
import {
  fetchWeatherDetails,
  fetchWeatherForecastDetails,
  getFormattedWeatherData,
  filterForecastList
} from "./services";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [units, setUnits] = useState("metric");
  const [search, setSearch] = useState(null);

  useEffect(() => {
    const handleOnSearchChange = async (searchData) => {
      const [lat, lon] = searchData.value.split(" ");

      const weatherDetails = await fetchWeatherDetails(lat, lon, units).then(
        getFormattedWeatherData
      );
      //console.log(weatherDetails);
      setCurrentWeather({ city: searchData.label, units, ...weatherDetails });

      const weatherForecastDetails = await fetchWeatherForecastDetails(
        lat,
        lon,
        units
      );

      const forecastData = filterForecastList(weatherForecastDetails);


      
      setForecast({ city: searchData.label, units, ...weatherForecastDetails, forecastData });
    };

    if(search){
      handleOnSearchChange(search);

    }
  }, [search, units]);

  return (
    <div className="app">
      <Search setSearch={setSearch} search={search} />

      {currentWeather && (
        <>
          <TimeAndButton setUnits={setUnits} weather={currentWeather} />{" "}
          <Weather data={currentWeather} />
        </>
      )}
      {forecast && <Forecast data={forecast} />}
    </div>
  );
}

export default App;
