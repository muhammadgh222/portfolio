import {
  CREATE_ORDER,
  END_LOADING,
  START_LOADING,
} from "../constants/actionTypes";

export default (state = { isLoading: true, orders: [] }, action) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };
    case CREATE_ORDER:
      return { ...state, orders: [action.payload] };
    default:
      return state;
  }
};
