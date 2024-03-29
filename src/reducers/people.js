import {
  GET_ALL_USERS_FAIL,
  GET_ALL_USERS_REQ,
  GET_ALL_USERS_SUC,
} from "../constants";

export const getAllPleoplesReducer = (state = { peoples: [] }, action) => {
  switch (action.type) {
    case GET_ALL_USERS_REQ:
      return {
        loading: true,
      };
    case GET_ALL_USERS_SUC:
      return {
        loading: false,
        peoples: action.payload,
      };
    case GET_ALL_USERS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
