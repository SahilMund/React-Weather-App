 // Options for the Geolocation API request
 import chroma from 'chroma-js';

export const geoApiOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": 'ba0869c64bmsh00421bed5d12154p1935ccjsnd8e95e611731',
    // 732e2819d1msh1e62bc16a0c81aap10c293jsn4e71e655ae36", // enter your rapid api key here
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};

// Base URL for the Geolocation API
export const GEO_API_BASE_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";

// Base URL for the OpenWeatherMap API
export const WEATHER_API_BASE_URL = "https://api.openweathermap.org/data/2.5";
// API key for the OpenWeatherMap API
export const WEATHER_API_KEY = "271b01db68a163677fa302c05cb37e34";

// Base URL for the OpenWeatherMap weather icon images
export const WEATHER_API_IMAGE_URL = "http://openweathermap.org/img/wn";

// Function to fetch data from an API and parse the response as JSON
export const fetchAPI = (url) => fetch(url).then((response) => response.json());


// Define a temperature range from 0 to 40 degrees Celsius
const temperatureRange = [0, 40];

// Define a color scale with three colors: blue, yellow, and red
const colorScale = chroma.scale(['blue', 'yellow', 'red']).domain(temperatureRange);

// Map a temperature value to a color using the color scale
export const getTemperatureColor = (temp, unit) => {
  // Convert the temperature to Celsius if necessary
  if (unit === 'F') {
    temp = (temp - 32) * 5 / 9;
  }

  // Determine the color based on the temperature value
  let color;
  if (temp < 10) {
    color = colorScale(0).hex();
  } else if (temp >= 10 && temp < 20) {
    color = colorScale(10).hex();
  } else if (temp >= 20 && temp < 30) {
    color = colorScale(20).hex();
  } else {
    color = colorScale(30).hex();
  }

  return color;
}

// // Example usage: get the color for a temperature of 25 degrees Celsius
// const celsiusTemp = 25;
// const celsiusColor = getTemperatureColor(celsiusTemp, 'C');
// console.log(celsiusColor); // Outputs a hex color code, such as "#ffff00" (yellow)

// // Example usage: get the color for a temperature of 77 degrees Fahrenheit
// const fahrenheitTemp = 77;
// const fahrenheitColor = getTemperatureColor(fahrenheitTemp, 'F');
// console.log(fahrenheitColor); // Outputs a hex color code, such as "#ff0000" (red)

