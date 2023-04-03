import { WeatherActionTypes } from "../constants/action-types";

// defining initial state for weather Reducer
const initialState = {
  units: "metric",
  currentWeather: null,
  forecast: null,
};

/* This reducer updates the current weather and forecast Details according to the selected city
It responds to the FETCH_CURRENT_WEATHER action type and sets the currentWeather details.
It responds to the MANAGE_UNITS action type and sets the units.
It responds to the FETCH_WEATHER_FORECAST action type and sets the forecast details.
*/
export const weatherReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case WeatherActionTypes.FETCH_CURRENT_WEATHER:
      return { ...state, currentWeather: payload };
    case WeatherActionTypes.MANAGE_UNITS:
      return { ...state, units: payload };
    case WeatherActionTypes.FETCH_WEATHER_FORECAST:
      return { ...state, forecast: payload };

    default:
      return state;
  }
};
