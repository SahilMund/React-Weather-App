import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./App.css";
import { Forecast, Search, TimeAndButton, Weather, Weathersss } from "./components";
import {
  fetchCurrentWeather,
  fetchWeatherForeCast,
} from "./redux/actions/weatherAction";

function App() {
  // using useDispatch hook to get a reference to the dispatch function to be able to dispatch actions to update the state.
  const dispatch = useDispatch();

  // the useSelector hook is used to extract data from the Redux store state
  const { search } = useSelector((state) => state.city);
  const { units, currentWeather, forecast } = useSelector(
    (state) => state.weather
  );

  // useEffect to fetch the current weather and forecast when the search or units changes.

  useEffect(() => {
    const handleOnSearchChange = () => {
      // if (!search && navigator.geolocation) {
      //   navigator.geolocation.getCurrentPosition((position) => {
      //     const { latitude, longitude } = position.coords;
      //     dispatch(fetchCurrentWeather(latitude, longitude));
      //     dispatch(fetchWeatherForeCast(latitude, longitude));
      //   });
      // } else {
      dispatch(fetchCurrentWeather(0, 0)); // Dispatch action to fetch current weather.
      dispatch(fetchWeatherForeCast(0, 0)); // Dispatch action to fetch forecast.
      // }
    };

    console.log(search);
    // If there is a search value, then only call the search change handler.
    search.length !==0 && handleOnSearchChange();
  }, [search, units]);

  return (
    <div className="app">
      <Search />

      {currentWeather && (
        <>
          <TimeAndButton />
          <Weathersss />
        </>
      )}
      {forecast && <Forecast />}
    </div>
  );
}

export default App;
