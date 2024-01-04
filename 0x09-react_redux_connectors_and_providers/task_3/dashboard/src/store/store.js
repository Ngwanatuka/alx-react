import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import uiReducer from "../reducers/uiReducer";

const rootReducer = combineReducers({
  ui: uiReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
