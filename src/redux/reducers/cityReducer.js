import { CityActionTypes } from "../constants/action-types";

// Taking data from localStorage and setting it as initial value for the state
const initialState = {
    search : '',
    cityDetails : {}
 };

/* This reducer updates the city state with the search results
It responds to the SET_CITY action type and sets the city, state, and country properties

*/
export const cityReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CityActionTypes.FETCH_ALL_CITY:
      // Fetch products
      return { ...state, cityDetails: payload };
    case CityActionTypes.MANAGE_SEARCH_INPUT:
      // Create a product with id equals to the length of the products array + 1
      
      return { ...state, search : payload };
   
    default:
      return state;
  }
};
