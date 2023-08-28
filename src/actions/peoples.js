import axios from "axios";
import { TOKEN } from "../constants";
import {
  GET_ALL_USERS_FAIL,
  GET_ALL_USERS_REQ,
  GET_ALL_USERS_SUC,
} from "../constants/user";

//get all peoples
export const getAllPeoples = (phone) => async (dispatch) => {
  const url = `${process.env.BASE_URL}/api/people/all`;
  try {
    dispatch({ type: GET_ALL_USERS_REQ });
    const { data } = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        "token": localStorage.getItem(TOKEN),
      },
      withCredentials: true,
    });
    dispatch({
      type: GET_ALL_USERS_SUC,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_USERS_FAIL,
      payload: error.response.data.message,
    });
  }
};
