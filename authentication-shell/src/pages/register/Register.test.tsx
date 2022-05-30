import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";
import Register from "./Register";

it("render without crashing Register", () => {
  render(
    <BrowserRouter>
      <Register />
    </BrowserRouter>
  );
});

it("render the input fields", () => {
  render(
    <BrowserRouter>
      <Register />
    </BrowserRouter>
  );
  const FirstnameBox = screen.getByTestId("firstname-input");
  expect(FirstnameBox).toBeInTheDocument();
  expect(FirstnameBox).toHaveAttribute("type", "text");
  fireEvent.change(FirstnameBox, { target: { value: "deepthi" } });
  expect(screen.getByTestId("firstname-input")).toHaveValue("deepthi");

  const LastnameBox = screen.getByTestId("lastName-input");
  expect(LastnameBox).toBeInTheDocument();
  expect(LastnameBox).toHaveAttribute("type", "text");
  fireEvent.change(LastnameBox, { target: { value: "polsani" } });
  expect(screen.getByTestId("lastName-input")).toHaveValue("polsani");

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

  const cnfpasswordBox = screen.getByTestId("cnfpassword-input");
  expect(cnfpasswordBox).toBeInTheDocument();
  expect(cnfpasswordBox).toHaveAttribute("type", "password");
  fireEvent.change(cnfpasswordBox, { target: { value: "deepthi@123" } });
  expect(screen.getByTestId("cnfpassword-input")).toHaveValue("deepthi@123");
});

it("render the buttons", () => {
  render(
    <BrowserRouter>
      <Register />
    </BrowserRouter>
  );

  const SignupBtn = screen.getByTestId("signp-btn");
  expect(SignupBtn).toBeInTheDocument();
  expect(SignupBtn).toHaveAttribute("type", "submit");

  const LoginBtn = screen.getByTestId("login-btn");
  expect(LoginBtn).toBeInTheDocument();
  expect(LoginBtn).toHaveAttribute("type", "button");
  fireEvent.click(LoginBtn);
});

it("form should be submitted", () => {
  render(
    <BrowserRouter>
      <Register />
    </BrowserRouter>
  );

  const FirstnameBox = screen.getByTestId("firstname-input");
  fireEvent.change(FirstnameBox, { target: { value: "deepthi" } });

  const LastnameBox = screen.getByTestId("lastName-input");
  fireEvent.change(LastnameBox, { target: { value: "polsani" } });

  const emailBox = screen.getByTestId("email-input");
  fireEvent.change(emailBox, { target: { value: "deepthi@gmail.com" } });

  const passwordBox = screen.getByTestId("password-input");
  fireEvent.change(passwordBox, { target: { value: "deepthi@123" } });

  const cnfpasswordBox = screen.getByTestId("cnfpassword-input");
  fireEvent.change(cnfpasswordBox, { target: { value: "deepthi@123" } });

  const SignupBtn = screen.getByTestId("signp-btn");
  fireEvent.click(SignupBtn);
});

it("should throw an error", () => {
  render(
    <BrowserRouter>
      <Register />
    </BrowserRouter>
  );

  const SignupBtn = screen.getByTestId("signp-btn");
  fireEvent.click(SignupBtn);
});
