import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./store/index";
import { Spin } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback={<Spin />}>
        <App />
      </Suspense>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
