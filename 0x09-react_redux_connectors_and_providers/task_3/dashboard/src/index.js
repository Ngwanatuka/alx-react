import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App";
import store from "./store/store";
import { Provider } from "react-redux";
import uiReducer from "./reducers/uiReducer";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";

const store = createStore(uiReducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
