import {
  USER_MESSAGES_REQUEST,
  USER_MESSAGES_SUCCESS,
  USER_MESSAGES_FAIL,
} from "../constants";

export const getAllMessagesReducer = (state = { messages: [] }, action) => {
  switch (action.type) {
    case USER_MESSAGES_REQUEST:
      return {
        progress: 20,
        loading: true,
        newMessage: false,
      };
    case USER_MESSAGES_SUCCESS:
      return {
        progress: 100,
        loading: false,
        messages: action.payload,
        newMessage: true,
      };
    case USER_MESSAGES_FAIL:
      return {
        ...state,
        progress: 100,
        loading: false,
        error: action.payload,
        newMessage: false,
      };
    default:
      return state;
  }
};
