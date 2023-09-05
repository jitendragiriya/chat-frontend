import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";

import { authUserReducer, googleAuthReducer } from "./reducers/auth";
import { getAllPleoplesReducer } from "./reducers/people";
import { getAllMessagesReducer } from "./reducers/chat";

const appReducer = combineReducers({
  User: authUserReducer,
  Peoples: getAllPleoplesReducer,
  Messages: getAllMessagesReducer,
  GoogleAuth: googleAuthReducer,
});

//reset reducer
const rootReducer = (state, action) => {
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
