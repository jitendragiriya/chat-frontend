import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_FAIL } from "../constants";

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
