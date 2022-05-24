import React from "react";
const Header = React.lazy(() => import('component/Header'));
const Footer = React.lazy(() => import('component/Footer'));
// import Header from "component/Header";
// import Footer from "component/Footer";
import { Outlet } from "react-router-dom";
import "./index.css";
import { AsyncLoader } from "./errorboundaries/ComponentErrorBoundary";
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
