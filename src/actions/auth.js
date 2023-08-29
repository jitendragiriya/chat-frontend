import axios from "axios";
import { TOKEN } from "../constants";
import {
  AUTH_REQUEST,
  AUTH_SUCCESS,
  AUTH_FAIL,
  GENERATE_OTP_REQUEST,
  GENERATE_OTP_SUCCESS,
  GENERATE_OTP_FAIL,
} from "../constants/auth"; 

// login with otp
export const loginWithOTPAction = (email) => async (dispatch) => {
  const url = `${process.env.REACT_APP_BASE_URL}/api/login`;
  try {
    dispatch({ type: GENERATE_OTP_REQUEST });
    const { data } = await axios.post(
      url,
      { email },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    dispatch({
      type: GENERATE_OTP_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GENERATE_OTP_FAIL,
      payload: error?.response?.data?.message,
    });
  }
};

// checking user is already loggein or not
export const authUser = () => async (dispatch) => {
  const token  = localStorage.getItem(TOKEN);
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
