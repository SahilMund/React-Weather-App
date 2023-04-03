import { GEO_API_BASE_URL, geoApiOptions } from "./constants";

/**
 * Fetches city details from the RapidAPI Geo DB API based on a search string.
 * The `inputCity` parameter is used as the search query string.
 * Returns a promise that resolves with the JSON response from the API.
 */
export const fetchCityDetails = async (inputCity) => {
  try {
    const response = await fetch(
      `${GEO_API_BASE_URL}/cities?minPopulation=1000000&namePrefix=${inputCity}`,
      geoApiOptions
    );
    return response.json();
  } catch (err) {
    console.log(err);
  }
};
