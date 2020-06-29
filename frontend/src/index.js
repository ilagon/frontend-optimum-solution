import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import reducer from "./components/customer/common/redux/rootReducer";
import { Provider } from "react-redux";

export const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById("root")
);
