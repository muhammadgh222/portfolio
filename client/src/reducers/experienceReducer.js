import { GET_ALL_EXPERIENCES } from "../constants/actionTypes";

export default (state = { experiences: [] }, action) => {
  switch (action.type) {
    case GET_ALL_EXPERIENCES:
      return { ...state };
    default:
      return state;
  }
};
