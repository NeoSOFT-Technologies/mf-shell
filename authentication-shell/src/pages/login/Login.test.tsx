import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";
import Login from "./Login";

it("render without crashing Login", () => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
});

it("render the input fields", () => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
  const emailBox = screen.getByTestId("email-input");
  expect(emailBox).toBeInTheDocument();
  expect(emailBox).toHaveAttribute("type", "email");
  fireEvent.change(emailBox, { target: { value: "deepthi@gmail.com" } });
  expect(screen.getByTestId("email-input")).toHaveValue("deepthi@gmail.com");

  const passwordBox = screen.getByTestId("password-input");
  expect(passwordBox).toBeInTheDocument();
  expect(passwordBox).toHaveAttribute("type", "password");
  fireEvent.change(passwordBox, { target: { value: "deepthi@123" } });
  expect(screen.getByTestId("password-input")).toHaveValue("deepthi@123");
});

it("render the button", () => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
  const CheckboxBtn = screen.getByTestId("checkbox-input");
  expect(CheckboxBtn).toBeInTheDocument();
  expect(CheckboxBtn).toHaveAttribute("type", "checkbox");

  const LoginBtn = screen.getByTestId("login-Btn");
  expect(LoginBtn).toBeInTheDocument();
  expect(LoginBtn).toHaveAttribute("type", "submit");

  const FormSubmit = screen.getByTestId("form-submit");
  expect(FormSubmit).toBeInTheDocument();
  fireEvent.click(FormSubmit);

  const RegisterBtn = screen.getByTestId("register-Btn");
  expect(RegisterBtn).toBeInTheDocument();
  fireEvent.click(RegisterBtn);
});

it("form should be submitted", () => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );

  const emailBox = screen.getByTestId("email-input");
  fireEvent.change(emailBox, { target: { value: "deepthi@gmail.com" } });

  const passwordBox = screen.getByTestId("password-input");
  fireEvent.change(passwordBox, { target: { value: "deepthi@123" } });

  const LoginBtn = screen.getByTestId("login-Btn");
  fireEvent.click(LoginBtn);
});

it("should throw an error", () => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );

  const LoginBtn = screen.getByTestId("login-Btn");
  fireEvent.click(LoginBtn);
});
