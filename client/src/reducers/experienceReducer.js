import {
  END_LOADING,
  GET_ALL_EXPERIENCES,
  START_LOADING,
} from "../constants/actionTypes";

export default (state = { isLoading: true, experiences: [] }, action) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };
    case GET_ALL_EXPERIENCES:
      return { ...state, experiences: action.payload };
    default:
      return state;
  }
};
