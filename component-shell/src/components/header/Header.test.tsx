import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";
it("render without crashing Header", () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
});
it("render the input buttons", () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
  const LoginBtn = screen.getByTestId("login-Btn");
  expect(LoginBtn).toBeInTheDocument();
  fireEvent.click(LoginBtn);
  const RegisterBtn = screen.getByTestId("Register-Btn");
  expect(RegisterBtn).toBeInTheDocument();
  fireEvent.click(RegisterBtn);
});
