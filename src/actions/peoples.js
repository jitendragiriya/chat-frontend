import axios from "axios";
import { TOKEN } from "../constants";
import {
  GET_ALL_USERS_FAIL,
  GET_ALL_USERS_REQ,
  GET_ALL_USERS_SUC,
} from "../constants/user";

//get all peoples
export const getAllPeoples = () => async (dispatch) => {
  const token = localStorage.getItem(TOKEN);
  if(typeof token !== "string") return;

  const url = `${process.env.REACT_APP_BASE_URL}/api/people/all`;
  try {
    dispatch({ type: GET_ALL_USERS_REQ });
    const { data } = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        token: token,
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
      payload: error?.response?.data?.message,
    });
  }
};
