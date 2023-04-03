import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Search, Weather } from "./components";
import {
  fetchCurrentWeather,
  fetchWeatherForeCast,
} from "./redux/actions/weatherAction";

import "./styles/App.css";

function App() {
  // using useDispatch hook to get a reference to the dispatch function to be able to dispatch actions to update the state.
  const dispatch = useDispatch();

  // the useSelector hook is used to extract data from the Redux store state
  const { search } = useSelector((state) => state.city);
  const { units, currentWeather, forecast } = useSelector(
    (state) => state.weather
  );

  // Function to get the weather of current location
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

  // useEffect to fetch the current weather and forecast when the search or units changes.
  useEffect(() => {
    const handleOnSearchChange = () => {
      const q = { type: "SEARCHED_LOCATION_WEATHER", data: {} };

      dispatch(fetchCurrentWeather(q)); // Dispatch action to fetch current weather.
      dispatch(fetchWeatherForeCast(q)); // Dispatch action to fetch forecast.
    };

    // If there is a search value, then only call the search change handler.
    search.length !== 0 && handleOnSearchChange();
  }, [search, units]);

  useEffect(() => {
    !search && getCurrentLocation();
  }, []);

  return (
    <div className="app">
      <Search />

      {currentWeather && forecast && <Weather />}
    </div>
  );
}

export default App;
