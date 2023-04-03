import {
  fetchWeatherDetails,
  fetchWeatherForecastDetails,
  filterForecastList,
  getFormattedWeatherData,
} from "../../services";
import { WeatherActionTypes } from "../constants/action-types";

// Action creator to fetch the current weather details
export const fetchCurrentWeather =
  ({ type, data }) =>
  async (dispatch, getState) => {
    const { units } = getState().weather;
    const { search } = getState().city;

    const [lat, lon] =
      type === "CURRENT_LOCATION_WEATHER"
        ? [data.latitude, data.longitude]
        : search.value.split(" ");

    const weatherDetails = await fetchWeatherDetails(lat, lon, units).then(
      getFormattedWeatherData
    );

    const label = type === "CURRENT_LOCATION_WEATHER" ? "" : search.label;

    dispatch({
      type: WeatherActionTypes.FETCH_CURRENT_WEATHER,
      payload: { city: label, units, ...weatherDetails },
    });
  };

// Action creator to manage temperature unit
export const manageUnits = (unitType) => async (dispatch) => {
  dispatch({ type: WeatherActionTypes.MANAGE_UNITS, payload: unitType });
};

// Action creator to fetch the weather forecast details
export const fetchWeatherForeCast =
  ({ type, data }) =>
  async (dispatch, getState) => {
    const { units } = getState().weather;
    const { search } = getState().city;
    const [lat, lon] =
      type === "CURRENT_LOCATION_WEATHER"
        ? [data.latitude, data.longitude]
        : search.value.split(" ");

    const weatherForecastDetails = await fetchWeatherForecastDetails(
      lat,
      lon,
      units
    );

    const forecastData = filterForecastList(weatherForecastDetails);
    const currentDate = forecastData[0].dt_txt.split(" ")[0];
    const filteredForeCastData = forecastData.filter((ele) => {
      const dt = ele.dt_txt.split(" ")[0];
      return dt !== currentDate;
    });

    console.log(forecastData);
    console.log("filteredForeCastData", filteredForeCastData);

    const label = type === "CURRENT_LOCATION_WEATHER" ? "" : search.label;

    dispatch({
      type: WeatherActionTypes.FETCH_WEATHER_FORECAST,
      payload: {
        city: label,
        units,
        ...weatherForecastDetails,
        filteredForeCastData,
      },
    });
  };
