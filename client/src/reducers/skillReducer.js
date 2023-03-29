import { GET_ALL_SKILLS } from "../constants/actionTypes";

export default (state = { skills: [] }, action) => {
  switch (action.type) {
    case GET_ALL_SKILLS:
      return { ...state };
    default:
      return state;
  }
};
