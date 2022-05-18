import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
import { useNavigate } from "react-router-dom";
import { loginCall, jwt } from "../services/service";

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("sally@gmail.com");
  const [password, setPassword] = useState("123");
  const validate = (event) => {
    event.preventDefault();
    loginCall(username, password).then(() => {
      sessionStorage.setItem("_token", jwt.value);
      setTimeout(() => {
        navigate("/");
      }, 200);
    });
  };
  return (
    <div className="centerMe bggrading">
      <Form className="w-40 glassbg  p-4 " onSubmit={validate}>
        <h1 className="text-center heading ">Login</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            className="inputfields"
            value={username}
            onChange={(evt) => setUsername(evt.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            className="inputfields"
            value={password}
            onChange={(evt) => setPassword(evt.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>
        <Button className="w-100 inputfields" type="submit">
          Log In
        </Button>

        <p className="text-center mt-2 ">
          <button type="button" className="forgetPassword">
            Forget Password
          </button>
          <button
            className="forgetPassword"
            type="button"
            onClick={() => {
              navigate("/signup");
            }}
          >
            SignUp
          </button>
        </p>
      </Form>
    </div>
  );
}
