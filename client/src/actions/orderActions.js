import * as api from "../api";
import {
  END_LOADING,
  CREATE_ORDER,
  START_LOADING,
} from "../constants/actionTypes";

export const createOrder = (order) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.createOrder(order);
    dispatch({ type: CREATE_ORDER, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};
