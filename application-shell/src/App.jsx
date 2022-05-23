import React from "react";
import ReactDOM from "react-dom";
import AppRoutes from "./AppRoutes";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => (
  <div>
    <AppRoutes />
  </div>
);
ReactDOM.render(<App />, document.querySelector("#app"));
