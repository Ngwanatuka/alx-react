import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";  // Import createStore and applyMiddleware once
import thunk from "redux-thunk";
import uiReducer from "./reducers/uiReducer";

const store = createStore(uiReducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
