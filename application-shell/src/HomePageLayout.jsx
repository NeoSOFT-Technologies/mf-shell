import React from "react";
// import Header from "component/Header";
// import Footer from "component/Footer";
import { Outlet } from "react-router-dom";
import "./index.css";
import { AsyncLoader } from "./errorboundaries/ComponentErrorBoundary";
const Header = React.lazy(() => import("component/Header"));
const Footer = React.lazy(() => import("component/Footer"));
export default function HomePageLayout() {
  return (
    <>
      <AsyncLoader>
        <Header />
      </AsyncLoader>

      <div className="homeArea">
        <Outlet />
      </div>
      <AsyncLoader>
        <Footer />
      </AsyncLoader>
    </>
  );
}
