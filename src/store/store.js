import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { provider, lottery } from "./reducers";

const reducers = combineReducers({
  provider,
  lottery
});

const initialState = {};

const middleWare = [thunk];

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleWare))
);

export default store;
