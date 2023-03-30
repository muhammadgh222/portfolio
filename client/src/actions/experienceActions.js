import * as api from "../api";
import {
  END_LOADING,
  GET_ALL_EXPERIENCES,
  START_LOADING,
} from "../constants/actionTypes";

export const getAllExperiences = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.getAllExperiences();
    dispatch({ type: GET_ALL_EXPERIENCES, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};
