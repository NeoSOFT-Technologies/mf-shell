import React from "react";
import ReactDOM from "react-dom";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Login from "./authenticate/login/Login";
// import Register from "./authenticate/register/Register";
// import UserDetails from "./authenticate/users/UserDetails";
// import Users from "./authenticate/users/Users";
// import "./index.css";

const App = () => (
  <>
    <div className="container">
      <div>Name: authentication-shell</div>
      <div>Framework: react</div>
      <div>Language: JavaScript</div>
      <div>CSS: Empty CSS</div>
    </div>
    {/* <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Users />} />
        <Route path="/users/:id" element={<UserDetails />} />
      </Routes>
    </Router> */}
  </>
);
ReactDOM.render(<App />, document.querySelector("#app"));
