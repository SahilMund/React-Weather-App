import { fetchCityDetails} from "../../services";
import { CityActionTypes } from "../constants/action-types";

// To add a product to the cart
export const fetchCities = (input) => async (dispatch) => {
    const cityDetails = await fetchCityDetails(input);

  dispatch({ type: CityActionTypes.FETCH_ALL_CITY, payload: cityDetails });
};

export const manageSearchInput = (searchInput) => async (dispatch) => {

  dispatch({ type: CityActionTypes.MANAGE_SEARCH_INPUT, payload: searchInput });
};
