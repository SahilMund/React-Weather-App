// Action types for managing weather details
export const WeatherActionTypes = {
    FETCH_CURRENT_WEATHER: "FETCH_CURRENT_WEATHER", // Action to fetch the current weather
    MANAGE_UNITS : 'MANAGE_UNITS', // Action to update (or) manage the temperature unit
    FETCH_WEATHER_FORECAST: "FETCH_WEATHER_FORECAST", // Action to fetch the weather forecast
  };


// Action types for managing city and search data
export const CityActionTypes = {
    FETCH_ALL_CITY: "FETCH_ALL_CITY", // Action to fetch cities from the API
    MANAGE_SEARCH_INPUT : 'MANAGE_SEARCH_INPUT', // Action to manage the user input for city search
  };
  
  