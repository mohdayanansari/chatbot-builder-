import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/tailwind.css";
import "./styles/globals.css";
// Redux
// import { Provider } from "react-redux";
// import store from "./redux/store";

// root
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <App />
  // <Provider store={store}>
  // </Provider>
);
