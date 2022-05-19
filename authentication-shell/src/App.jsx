import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
// import Login from "./authenticate/login/Login";
// import Register from "./authenticate/register/Register";
import Users from "./authenticate/users/Users";

// import "./index.css";

const App = () => (
  <>
    {/* <div className="container">
      <div>Name: authentication-shell</div>
      <div>Framework: react</div>
      <div>Language: JavaScript</div>
      <div>CSS: Empty CSS</div>
    </div> */}
    <Router>
      <Users />
      {/* <Login/> */}
    </Router>
  </>
);
ReactDOM.render(<App />, document.querySelector("#app"));
