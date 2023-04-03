import { fetchCityDetails } from "../../services";
import { CityActionTypes } from "../constants/action-types";

// Action creator to fetch cityDetails
export const fetchCities = (input) => async (dispatch) => {
  const cityDetails = await fetchCityDetails(input);
  dispatch({ type: CityActionTypes.FETCH_ALL_CITY, payload: cityDetails });
};

// Action creator to manage user input for city search
export const manageSearchInput = (searchInput) => async (dispatch) => {
  console.log(searchInput);
  dispatch({ type: CityActionTypes.MANAGE_SEARCH_INPUT, payload: searchInput });
};
