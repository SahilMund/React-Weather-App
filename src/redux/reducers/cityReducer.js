import { CityActionTypes } from "../constants/action-types";

// defining initial state for city Reducer
const initialState = {
  search: "",
  cityDetails: {},
};

/* This reducer updates the city Details and the search results
It responds to the FETCH_ALL_CITY action type and sets the cityDetails properties.
It responds to the MANAGE_SEARCH_INPUT action type and sets the search data.
*/
export const cityReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CityActionTypes.FETCH_ALL_CITY:
      return { ...state, cityDetails: payload };
    case CityActionTypes.MANAGE_SEARCH_INPUT:
      return { ...state, search: payload };

    default:
      return state;
  }
};
