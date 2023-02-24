import { createStore } from "redux";
import { rootReducer } from "../reducer/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
// 1- Create Store
export const storeCounter = createStore(rootReducer, composeWithDevTools());
