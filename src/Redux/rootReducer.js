import { combineReducers } from "redux";
import toursReducer from "./TourReducer/tourReducer";

//////////////////////////////////////////////////
const rootReducer = combineReducers({
  toursState: toursReducer,
});
export default rootReducer;
