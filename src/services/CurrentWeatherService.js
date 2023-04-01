import { DateTime } from "luxon";
import { WEATHER_API_BASE_URL, WEATHER_API_IMAGE_URL, WEATHER_API_KEY } from "./constants";

export const fetchWeatherDetails = async (lat, lon, units) => {
  const weatherResponse = await fetch(
    `${WEATHER_API_BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=${units}`
  );

  // const weatherResponse = await fetch(
  //   `${WEATHER_API_BASE_URL}/onecall?lat=${lat}&lon=${lon}&&exclude=current,minutely,hourly,alerts&appid=${WEATHER_API_KEY}&units=${units}`
  // );
  return weatherResponse.json();
};

export const getFormattedWeatherData = (data) => {

  //console.log(data);
  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_min, temp_max, humidity ,pressure},
    name,
    dt : date,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
    timezone
  } = data;

  const { main: weatherStatus, icon, description : weatherDescription } = weather[0];

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
    weatherDescription,pressure,timezone
  };
}


export const fetchWeatherAPIIcon = (code) => `${WEATHER_API_IMAGE_URL}/${code}@2x.png`;

export const formatTimeStampToLocalTime = (
  timestamp,
  timezoneOffset,
  format = "EEEE, dd MMMM yyyy"
) => {
  // Convert the Unix timestamp to a Luxon DateTime object and apply the timezone offset
const dateTime = DateTime.fromSeconds(timestamp).plus({ seconds: timezoneOffset });

// Format the DateTime object as "EEEE, do MMMM yyyy" (e.g. "Sunday, 14th April 2023")
const formattedDateTime = dateTime.toFormat(format);

// Output the formatted date string to the console
return formattedDateTime;

}