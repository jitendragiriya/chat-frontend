import axios from "axios";
import { TOKEN } from "../constants";
import { 
  USER_MESSAGES_FAIL,
  USER_MESSAGES_REQUEST,
  USER_MESSAGES_SUCCESS,
} from "../constants";

export const getAllMessages = (id) => async (dispatch) => {
  const url = `${process.env.REACT_APP_BASE_URL}/api/messages/all/${id}`;
  try {
    dispatch({ type: USER_MESSAGES_REQUEST });
    const { data } = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem(TOKEN),
      },
      withCredentials: true,
    });
    dispatch({
      type: USER_MESSAGES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_MESSAGES_FAIL,
      payload: error?.response?.data?.message,
    });
  }
};
