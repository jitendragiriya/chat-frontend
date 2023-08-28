import axios from "axios"; 
import {
  VERIFY_EMAIL_FAIL,
  VERIFY_EMAIL_REQUEST,
  VERIFY_EMAIL_SUCCUSS,
} from "../constants/auth";

//verify profile email
export const verifyEmail = (formbody) => async (dispatch) => {
  let url = `${process.env.BASE_URL}/api/verify-email`;
  try {
    dispatch({ type: VERIFY_EMAIL_REQUEST });
    const { data } = await axios.post(url, formbody, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    dispatch({
      type: VERIFY_EMAIL_SUCCUSS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: VERIFY_EMAIL_FAIL,
      payload: error.response.data.message,
    });
  }
};
