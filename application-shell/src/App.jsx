import React from "react";
import ReactDOM from "react-dom";
import AppRoutes from "./AppRoutes";

const App = () => (
  <div>
    <AppRoutes />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
