import { GET_ALL_WORKS } from "../constants/actionTypes";

export default (state = { works: [] }, action) => {
  switch (action.type) {
    case GET_ALL_WORKS:
      return { ...state, works: action.payload };
    default:
      return state;
  }
};
