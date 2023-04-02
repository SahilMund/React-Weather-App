import {
  fetchWeatherDetails,
  fetchWeatherForecastDetails,
  filterForecastList,
  getFormattedWeatherData,
} from "../../services";
import { WeatherActionTypes } from "../constants/action-types";

// To add a product to the cart
export const fetchCurrentWeather =
  (latt, long) => async (dispatch, getState) => {
    const { units } = getState().weather;
    const { search } = getState().city;

    const [lat, lon] =
      latt === 0 && long === 0 ? search.value.split(" ") : [latt, long];

    const weatherDetails = await fetchWeatherDetails(lat, lon, units).then(
      getFormattedWeatherData
    );

   
    dispatch({
      type: WeatherActionTypes.FETCH_CURRENT_WEATHER,
      payload: { city: search.label, units, ...weatherDetails },
    });
  };

export const manageUnits = (unitType) => async (dispatch) => {
  dispatch({ type: WeatherActionTypes.MANAGE_UNITS, payload: unitType });
};

export const fetchWeatherForeCast = (latt, long) => async (dispatch, getState) => {
  const { units } = getState().weather;
  const { search } = getState().city;
  const [lat, lon] =
      latt === 0 && long === 0 ? search.value.split(" ") : [latt, long];


  const weatherForecastDetails = await fetchWeatherForecastDetails(
    lat,
    lon,
    units
  );

  const forecastData = filterForecastList(weatherForecastDetails);
  const currentDate = forecastData[0].dt_txt.split(" ")[0];
  const filteredForeCastData = forecastData.filter(ele => {
    const dt = ele.dt_txt.split(" ")[0];
    return dt !== currentDate;
  } )

  console.log(forecastData);
  console.log('filteredForeCastData',filteredForeCastData);
  dispatch({
    type: WeatherActionTypes.FETCH_WEATHER_FORECAST,
    payload: {
      city: search.label,
      units,
      ...weatherForecastDetails,
      filteredForeCastData,
    },
  });
};
