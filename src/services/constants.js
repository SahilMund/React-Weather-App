export const geoApiOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "ba0869c64bmsh00421bed5d12154p1935ccjsnd8e95e611731",
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
