import * as api from "../api";
import { GET_ALL_WORKS } from "../constants/actionTypes";

export const getAllWorks = () => async (dispatch) => {
  try {
    const { data } = await api.getAllWorks();
    dispatch({ type: GET_ALL_WORKS, payload: data });
  } catch (error) {
    console.log(error);
  }
};
