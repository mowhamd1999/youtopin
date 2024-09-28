import { combineReducers } from "redux";
import toursReducer from "./TourReducer/tourReducer";
import userReducer from "./userReducer/userReducer";
//////////////////////////////////////////////////
const rootReducer = combineReducers({
  toursState: toursReducer,
  userState : userReducer,
});
export default rootReducer;
