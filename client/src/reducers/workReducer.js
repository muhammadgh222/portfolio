import {
  END_LOADING,
  GET_ALL_WORKS,
  START_LOADING,
} from "../constants/actionTypes";

export default (state = { isLoading: true, works: [] }, action) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };
    case GET_ALL_WORKS:
      return { ...state, works: action.payload };
    default:
      return state;
  }
};
