import { combineReducers } from "redux";
import works from "./workReducer";
import skills from "./skillReducer";
import experiences from "./experienceReducer";
import orders from "./orderReducer";

export default combineReducers({
  works,
  skills,
  experiences,
  orders,
});
