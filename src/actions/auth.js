import axios from "axios";
import { TOKEN } from "../constants";
import {
  GOOGLE_AUTH_REQUEST,
  GOOGLE_AUTH_SUCCESS,
  GOOGLE_AUTH_FAIL,
  AUTH_REQUEST,
  AUTH_SUCCESS,
  AUTH_FAIL,
} from "../constants";

// checking user is already loggein or not
export const authUser = () => async (dispatch) => {
  const token = localStorage.getItem(TOKEN);
  if (token) {
    const url = `${process.env.REACT_APP_BASE_URL}/api/auth`;
    try {
      dispatch({ type: AUTH_REQUEST });
      const { data } = await axios.get(url, {
        headers: {
          "Content-Type": "application/json",
          token: localStorage.getItem(TOKEN),
        },
        withCredentials: true,
      });
      dispatch({
        type: AUTH_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: AUTH_FAIL,
        payload: error?.response?.data?.message,
      });
    }
  }
};

// login with google
export const loginWithGoogleAction = (token) => async (dispatch) => {
  const url = `${process.env.REACT_APP_BASE_URL}/api/auth/google`;
  try {
    dispatch({ type: GOOGLE_AUTH_REQUEST });
    const { data } = await axios.post(
      url,
      { token },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    dispatch({
      type: GOOGLE_AUTH_SUCCESS,
      payload: data?.token,
    });
    localStorage.setItem(TOKEN, data?.token);
    dispatch(authUser());
  } catch (error) {
    dispatch({
      type: GOOGLE_AUTH_FAIL,
      payload: error?.response?.data?.message,
    });
  }
};
