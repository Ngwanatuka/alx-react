import { createStore, combineReducers } from "redux";
import uiReducer from "../reducers/uiReducer";

const rootReducer = combineReducers({
  ui: uiReducer,
});

const store = createStore(rootReducer);

export default store;
