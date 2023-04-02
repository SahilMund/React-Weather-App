import { combineReducers } from "redux";
import { cityReducer } from "./cityReducer";
import { weatherReducer } from "./weatherReducer";

// Using combined reducer to be able to use multiple reducers
const reducers = combineReducers({
  weather: weatherReducer,
  city: cityReducer,
});

export default reducers;
