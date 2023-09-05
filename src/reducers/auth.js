import {
  AUTH_REQUEST,
  AUTH_SUCCESS,
  AUTH_FAIL,
  GOOGLE_AUTH_REQUEST,
  GOOGLE_AUTH_SUCCESS,
  GOOGLE_AUTH_FAIL,
} from "../constants";

export const authUserReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case AUTH_REQUEST:
      return {
        loading: true,
        isAuthenticated: false,
      };
    case AUTH_SUCCESS:
      return {
        loading: false,
        user: action.payload,
        isAuthenticated: true,
      };
    case AUTH_FAIL:
      return {
        loading: false,
        user: null,
        error: action.payload,
        isAuthenticated: false,
      };

    default:
      return state;
  }
};

export const googleAuthReducer = (state = {}, action) => {
  switch (action.type) {
    case GOOGLE_AUTH_REQUEST:
      return {
        loading: true,
        auth: false,
      };
    case GOOGLE_AUTH_SUCCESS:
      return {
        loading: false,
        auth: true,
      };
    case GOOGLE_AUTH_FAIL:
      return {
        loading: false,
        auth: false,
      };

    default:
      return state;
  }
};
