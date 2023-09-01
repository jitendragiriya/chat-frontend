import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";

import { authUserReducer } from "./reducers/auth";
import { getAllPleoplesReducer } from "./reducers/people";
import {
  getAllMessagesReducer,
  sendMessageReducer,
  userDetailsReducer,
} from "./reducers/chat";
import { LOGOUT } from "./constants/auth";

const appReducer = combineReducers({
  User: authUserReducer,
  Peoples: getAllPleoplesReducer,
  Message: sendMessageReducer,
  Conversations: getAllMessagesReducer,
  Knowuser: userDetailsReducer,
});

//reset reducer
const rootReducer = (state, action) => {
  if (action.type === LOGOUT) {
    state = undefined;
  }
  return appReducer(state, action);
};

let initialState = {};

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk)
  // composeWithDevTools(applyMiddleware(thunk))
);

export default store;
