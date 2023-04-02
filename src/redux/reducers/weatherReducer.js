import { WeatherActionTypes } from "../constants/action-types";

const initialState = {
  units: "metric",
  currentWeather: null,
  forecast: null,
};

export const weatherReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case WeatherActionTypes.FETCH_CURRENT_WEATHER:
      // Fetch products
      return { ...state, currentWeather: payload };
    case WeatherActionTypes.MANAGE_UNITS:
      return { ...state, units: payload };
    case WeatherActionTypes.FETCH_WEATHER_FORECAST:
      return { ...state, forecast: payload };

    default:
      return state;
  }
};
