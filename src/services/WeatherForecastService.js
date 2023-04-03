import { WEATHER_API_BASE_URL, WEATHER_API_KEY, fetchAPI } from "./constants";

/**
 * Fetches the weather forecast details for a given location based on the latitude, longitude and units provided
 * The `lat` and `lon` parameters are used to specify the location.
 * The `units` parameter is used to specify the units (e.g. 'metric' for Celsius).
 * Returns a promise that resolves with the JSON response from the API.
 */
export const fetchWeatherForecastDetails = async (lat, lon, units) => {
  return fetchAPI(
    `${WEATHER_API_BASE_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=${units}`
  );
};

// Function to filter out the forecast data for the next five days
export const filterForecastList = (forecast) => {
  const weatherData = forecast.list;

  //  grouping the weather data by date
  const dataByDate = {};
  weatherData.forEach((data) => {
    const date = data.dt_txt.split(" ")[0]; // Extract the date part from the dt_txt field
    if (!dataByDate[date]) {
      dataByDate[date] = [];
    }
    dataByDate[date].push(data);
  });

  // Next, find the maximum temperature for each date
  const top1Data = [];
  Object.keys(dataByDate).forEach((date) => {
    const dataForDate = dataByDate[date];
    const maxTempData = dataForDate.reduce((maxData, currentData) => {
      if (currentData.main.temp > maxData.main.temp) {
        return currentData;
      }
      return maxData;
    });
    top1Data.push(maxTempData);
  });

  return top1Data;
};
