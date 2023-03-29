import { combineReducers } from "redux";
import works from "./workReducer";
import skills from "./skillReducer";
import experiences from "./experienceReducer";

export default combineReducers({
  works,
  skills,
  experiences,
});
