import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
// import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

const App = () => (
  <Router>
    <Register />
  </Router>
);
ReactDOM.render(<App />, document.querySelector("#app"));
