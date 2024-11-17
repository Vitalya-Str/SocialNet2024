import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/store-redux";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));

const reRender = (state) => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  );
};

reRender(store.getState());

store.subscribe(() => {
  const state = store.getState();
  reRender(state);
});
