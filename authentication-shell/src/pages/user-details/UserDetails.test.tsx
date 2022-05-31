import { render } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";
import UserDetails from "./UserDetails";

it("render without crashing UserDetails", () => {
  render(
    <BrowserRouter>
      <UserDetails />
    </BrowserRouter>
  );
});
