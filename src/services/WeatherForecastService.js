import { WEATHER_API_BASE_URL, WEATHER_API_KEY } from "./constants";

export const fetchWeatherForecastDetails = async (lat, lon, units) => {
  const weatherForecastResponse = await fetch(
    `${WEATHER_API_BASE_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=${units}`
  );

  return weatherForecastResponse.json();
};


export const filterForecastList = (forecast) => {
  const weatherData = forecast.list;
  // First, group the data by date
  // Assume that the weatherData array contains weather data for multiple dates and times

  // First, group the weather data by date
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


  console.log(top1Data);
  return top1Data; // outputs: [{ date: '2023-04-01', time: '12:00', temperature: 25, humidity: 60 }, { date: '2023-04-02', time: '12:00', temperature: 23, humidity: 55 }, ...]
};
