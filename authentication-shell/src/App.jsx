import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Login from "./pages/login/Login";
// import Register from "./authenticate/register/Register";
// import UserDetails from "./authenticate/users/UserDetails";
// import Users from "./authenticate/users/Users";
// import "./index.css";

import Users from "./pages/users/Users";


const App = () => (
  <Users />
);
ReactDOM.render(<App />, document.querySelector("#app"));
console.log(App)