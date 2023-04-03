# React Weather App

## Description :-
```
This project involves creating a weather app using React that allows users to search for a city and view current weather conditions and a five-day forecast. The app will integrate with one or more open weather APIs to retrieve weather data. Users will be able to enter a city name in the search bar to retrieve the current temperature, weather icon, and description for that city. The app will also display a five-day forecast that includes temperature and weather icons. The goal is to create a visually appealing and functional weather app that provides users with quick access to weather information for any city they choose.
```


## Features :-
- On opening the website, it fetches the weather of current location and displays it.
- Search bar for users to enter a city name and retrieve weather data.
- Displays current weather conditions for the searched city, including temperature, weather icon, and description.
- Displays a five-day forecast for the searched city, including temperature and weather icons.

## Technologies :-
This project was built using:

1. React
2. Redux [used for state management]
3. Open weather APIs [used to fetch weather and city details]


## API Used :-

- Geo API to fetch city details
```
https://wft-geo-db.p.rapidapi.com/v1/geo
```

- Weather API to fetch weather details
```
https://api.openweathermap.org/data/2.5
```

## Deployed URL :-

```


```

## Installation :-
To install and run the project locally, follow these steps:

1. Clone this repository
2. Run npm install to install all the dependencies
3. Create an account on OpenWeatherMap and obtain an API key. Used APIs :-
4. Replace 'YOUR_API_KEY_HERE' in the both APIs
5. Run npm start to start the development server


## Folder Structure :-

```
.gitignore
README.md
package-lock.json
package.json
public
   |-- favicon.ico
   |-- icons
   |   |-- 01d.png
   |   |-- 01n.png
   |   |-- 02d.png
   |   |-- 02n.png
   |   |-- 03d.png
   |   |-- 03n.png
   |   |-- 04d.png
   |   |-- 04n.png
   |   |-- 09d.png
   |   |-- 09n.png
   |   |-- 10d.png
   |   |-- 10n.png
   |   |-- 11d.png
   |   |-- 11n.png
   |   |-- 13d.png
   |   |-- 13n.png
   |   |-- 50d.png
   |   |-- 50n.png
   |   |-- unknown.png
   |-- index.html
   |-- logo192.png
   |-- logo512.png
   |-- manifest.json
   |-- robots.txt
src
   |-- App.js
   |-- components
   |   |-- CurrentWeather.js
   |   |-- Forecast.js
   |   |-- Search.js
   |   |-- Weather.js
   |   |-- WeatherDetails.js
   |   |-- index.js
   |-- index.js
   |-- redux
   |   |-- actions
   |   |   |-- cityAction.js
   |   |   |-- weatherAction.js
   |   |-- constants
   |   |   |-- action-types.js
   |   |-- reducers
   |   |   |-- cityReducer.js
   |   |   |-- index.js
   |   |   |-- weatherReducer.js
   |   |-- store.js
   |-- services
   |   |-- CityService.js
   |   |-- CurrentWeatherService.js
   |   |-- WeatherForecastService.js
   |   |-- constants.js
   |   |-- index.js
   |-- styles
   |   |-- App.css
   |   |-- forecast.css
   |   |-- weather-card.css
   |   |-- weather.css
```