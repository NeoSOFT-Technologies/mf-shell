import { render ,screen,fireEvent} from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";
import Users from "./Users";
it("render without crashing Users", () => {
  render(
    <BrowserRouter>
    <Users/>
     </BrowserRouter>
  );
//   const ForgetPasswordBtn = screen.getByTestId("forgetpassword-btn");
//   expect( ForgetPasswordBtn).toBeInTheDocument();
//  fireEvent.click( ForgetPasswordBtns);
//  const testBtn = screen.getByTestId("test-btn");
//  expect( testBtn).toBeInTheDocument();
});
