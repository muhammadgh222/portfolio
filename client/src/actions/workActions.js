import * as api from "../api";
import {
  END_LOADING,
  GET_ALL_WORKS,
  START_LOADING,
} from "../constants/actionTypes";

export const getAllWorks = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.getAllWorks();
    dispatch({ type: GET_ALL_WORKS, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};
