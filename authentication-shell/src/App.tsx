import React from "react";
import ReactDOM from "react-dom";
// import { BrowserRouter as Router } from "react-router-dom";
// import Login from "./pages/login/Login";
// import Register from "./pages/register/Register";

const App = () => (
  <>
  {/* do not delete comment if not needed */}
    <div className="container">
      <div>Name: authentication-shell</div>
      <div>Framework: react</div>
      <div>Language: JavaScript</div>
      <div>CSS: Empty CSS</div>
    </div>
    {/* write your code below */}
    {/* <Router>
      <Register />
    </Router> */}
  </>
);
ReactDOM.render(<App />, document.querySelector("#app"));
