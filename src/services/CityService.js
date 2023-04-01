import { GEO_API_BASE_URL, geoApiOptions } from "./constants"

export const fetchCityDetails = (inputCity)=>{

   return fetch(
        `${GEO_API_BASE_URL}/cities?minPopulation=1000000&namePrefix=${inputCity}`,
        geoApiOptions
      ).then((response) => response.json())
}