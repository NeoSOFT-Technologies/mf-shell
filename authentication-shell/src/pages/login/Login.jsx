import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../index.css";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/service";
// import { loginCall, jwt } from "../../services/service";
import { toast } from "react-toastify";
import ToastAlert from "component/ToastAlert";
import { regexForEmail, regexForPassword } from "../../resources/constants";

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [formError, setFormError] = useState({ email: "", password: "" });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "email":
        setFormError({
          ...formError,
          email: regexForEmail.test(value) ? "" : "Enter a Valid Email",
        });
        break;
      case "password":
        setFormError({
          ...formError,
          password: regexForPassword.test(value)
            ? ""
            : "Enter a Valid Password must contains minimum one Number,uppercase,lowercase,special Character (8-15).",
        });
        break;
      default:
        break;
    }
    setFormData({ ...formData, [name]: value });
  };
  const handleFormEmpty = () => {
    const empty = !!(formData.email === "" && formData.password === "");
    return empty;
  };
  const handleFormValidate = () => {
    const validate = !!(formError.email === "" && formError.password === "");
    return validate;
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!handleFormEmpty()) {
      if (handleFormValidate()) {
        console.log(formData);
        //
        login(formData).then(() => {
          navigate("/");
        });
      } else {
        ToastAlert("Please Enter Valid Details", "warning");
        console.log("Please Enter Valid Details", "warning");
      }
    } else {
      ToastAlert("Please Fill All Fields", "warning");
      console.log("Please Fill All Fields", "warning");
    }
  };
  // const validate = (event) => {
  //   event.preventDefault();
  //   loginCall(username, password).then(() => {
  //     sessionStorage.setItem("_token", jwt.value);
  //     setTimeout(() => {
  //       navigate("/");
  //     }, 200);
  //   });
  // };
  return (
    <div className="centerMe bggrading">
      <Form className="w-40 glassbg  p-4 " onSubmit={handleFormSubmit}>
        <h1 className="text-center heading ">Login</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            className="inputfields"
            value={formData.email}
            onChange={handleInputChange}
          // required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            className="inputfields"
            value={formData.password}
            onChange={handleInputChange}
          // required
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
              navigate("/register");
            }}
          >
            Register
          </button>
        </p>
      </Form>
    </div>
  );
}
