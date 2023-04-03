import { DateTime } from "luxon";
import {
  WEATHER_API_BASE_URL,
  WEATHER_API_IMAGE_URL,
  WEATHER_API_KEY,
  fetchAPI,
} from "./constants";

/**
 * Fetches weather details from the OpenWeatherMap API based on latitude and longitude coordinates.
 * The `lat` and `lon` parameters are used to specify the location.
 * The `units` parameter is used to specify the units (e.g. 'metric' for Celsius).
 * Returns a promise that resolves with the JSON response from the API.
 */

export const fetchWeatherDetails = async (lat, lon, units) => {
  return fetchAPI(
    `${WEATHER_API_BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=${units}`
  );
};

// Destructuring the required details from the API response object
export const getFormattedWeatherData = (data) => {
  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_min, temp_max, humidity, pressure },
    name,
    dt: date,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
    timezone,
  } = data;

  const {
    main: weatherStatus,
    icon,
    description: weatherDescription,
  } = weather[0];

  return {
    lat,
    lon,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    name,
    date,
    country,
    sunrise,
    sunset,
    weatherStatus,
    icon,
    speed,
    weatherDescription,
    pressure,
    timezone,
  };
};

// To Fetch the WeatherAPI Icons
export const fetchWeatherAPIIcon = (code) =>
  `${WEATHER_API_IMAGE_URL}/${code}@2x.png`;

// Converting the timestamp to local Time using Luxon library
export const formatTimeStampToLocalTime = (
  timestamp,
  timezoneOffset,
  format = "EEEE, dd MMMM yyyy"
) => {
  // Convert the Unix timestamp to a Luxon DateTime object and apply the timezone offset
  const dateTime = DateTime.fromSeconds(timestamp).plus({
    seconds: timezoneOffset,
  });

  // Format the DateTime object as the desired format
  const formattedDateTime = dateTime.toFormat(format);

  // Output the formatted date string to the console
  return formattedDateTime;
};
