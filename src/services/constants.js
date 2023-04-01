export const geoApiOptions = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "732e2819d1msh1e62bc16a0c81aap10c293jsn4e71e655ae36",// enter your rapid api key here
      "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
    },
  };
  export const GEO_API_BASE_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";
  
  export const WEATHER_API_BASE_URL = "https://api.openweathermap.org/data/2.5";
  export const WEATHER_API_KEY = '271b01db68a163677fa302c05cb37e34'
  
  // '1fa9ff4126d95b8db54f3897a208e91c' --author's key
  
  // "271b01db68a163677fa302c05cb37e34"; // enter your key from openweather API
  
  export const WEATHER_API_IMAGE_URL = 'http://openweathermap.org/img/wn';

 export const fetchAPI = (url) =>  fetch(url).then((response) => response.json() );

