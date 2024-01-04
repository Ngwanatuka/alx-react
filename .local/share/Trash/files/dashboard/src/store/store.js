import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import uiReducer from "../reducers/uiReducer";

const store = createStore(uiReducer, applyMiddleware(thunk));

export default store;
