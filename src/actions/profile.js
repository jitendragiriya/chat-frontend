import axios from "axios";
import { TOKEN } from "../constants";
import {
  UPDATE_PROFILE_FAIL,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
} from "../constants/profile"; 

// update profile
export const updateProfileAction = (formData) => async (dispatch) => {
  const url = `${process.env.BASE_URL}/api/profile/update`;
  try {
    dispatch({ type: UPDATE_PROFILE_REQUEST });
    const { data } = await axios.put(url, formData, {
      headers: {
        "Content-Type": "application/json",
        "token": localStorage.getItem(TOKEN),
      },
      withCredentials: true,
    });
    dispatch({
      type: UPDATE_PROFILE_SUCCESS,
      payload: data,
    });
  } catch (error) { 
    dispatch({
      
      type: UPDATE_PROFILE_FAIL,
      payload: error.response.data.message,
    });
  }
};
