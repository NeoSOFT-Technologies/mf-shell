import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../index.css";
import { useNavigate } from "react-router-dom";
import { regexForName, regexForEmail, regexForPassword } from "../../resources/constants"

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    LastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [formError, setFormError] = useState({
    firstName: "",
    LastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "firstName":
        setFormError({ ...formError, firstName: regexForName.test(value) ? "" : "Enter a Valid First Name", });
        break;
      case "LastName":
        setFormError({ ...formError, LastName: regexForName.test(value) ? "" : "Enter a Valid Last Name", });
        break;
      case "email":
        setFormError({ ...formError, email: regexForEmail.test(value) ? "" : "Enter a Valid Email", });
        break;
      case "password":
        setFormError({ ...formError, password: regexForPassword.test(value) ? "" : "Enter a Valid Password must contains minimum one Number,uppercase,lowercase,special Character (8-15).", });
        break;
      case "confirmPassword":
        setFormError({ ...formError, confirmPassword: formData.password === value ? "" : "Password don't match", });
        break;
      default: break;
    }
    setFormData({ ...formData, [name]: value });
  };
  const handleFormEmpty = () => {
    const empty = !!(formData.firstName === "" && formData.LastName === "" && formData.email === "" && formData.password === "" && formData.confirmPassword === "");
    return empty;
  };
  const handleFormValidate = () => {
    const validate = !!(formError.firstName === "" && formError.LastName === "" && formError.email === "" && formError.password === "" && formError.confirmPassword === "");
    return validate;
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!handleFormEmpty()) {
      if (handleFormValidate()) {
        console.log(formData);
        // 
        // register(formData).then(() => { navigate("/") })
      } else {
        // ToastAlert("Please Enter Valid Details", "warning");
        console.log("Please Enter Valid Details", "warning");
      }
    } else {
      // ToastAlert("Please Fill All Fields", "warning");
      console.log("Please Fill All Fields", "warning");
    }
  };
  return (
    <div className="centerMe bggrading">
      <Form className="w-40 glassbg  p-4 " onSubmit={handleFormSubmit}>
        <h1 className="text-center heading ">Sign up</h1>
        <Form.Group className="mb-3">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} className="inputfields" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" name="LastName" value={formData.LastName} onChange={handleInputChange} className="inputfields" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" value={formData.email} onChange={handleInputChange} className="inputfields" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" value={formData.password} onChange={handleInputChange} className="inputfields" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange} className="inputfields" />
        </Form.Group>
        <Button className="w-100 inputfields" type="submit">Sign Up</Button>
        <p className="text-center mt-2 ">
          <button type="button" className="forgetPassword" onClick={() => { navigate("/login"); }}>Log In</button>
        </p>
      </Form>
    </div>
  );
}
