import { render } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import HomePageLayout from "./HomePageLayout";
import { PageErrorBounday } from "./errorboundaries/PageErrorBoundary";
it("render without crashing AppRoutes", () => {
  render(<AppRoutes />);
});
it("render without crashing HomePageLayout", () => {
  render(
    <BrowserRouter>
      <HomePageLayout />
    </BrowserRouter>
  );
});

it("render without crashing PageErrorBoundayt", () => {
  render(
    <BrowserRouter>
      <PageErrorBounday />
    </BrowserRouter>
  );
});
