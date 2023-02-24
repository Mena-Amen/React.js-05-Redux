import { combineReducers } from "redux";
import { reduceCounter } from "./reducerCounter";
import { reducerAuth } from "./reducerAuth";

export const rootReducer = combineReducers({
  Auth: reducerAuth,
  Counter: reduceCounter,
});
