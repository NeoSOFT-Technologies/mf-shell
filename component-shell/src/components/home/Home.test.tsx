import { render } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";
import Home from "./Home";

it("render without crashing Home", () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
});
