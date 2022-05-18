import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Register from "./authenticate/Register";

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
      <Register />
    </Router>
  </>
);
ReactDOM.render(<App />, document.getElementById("app"));
