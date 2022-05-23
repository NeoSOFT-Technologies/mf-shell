import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const Login = lazy(() => import("authentication/Login"));
const Register = lazy(() => import("authentication/Register"));
const HomePageLayout = lazy(() => import("./HomePageLayout"));
const Home = lazy(() => import("component/Home"));
const Users = lazy(() => import("authentication/Users"));
const UserDetails = lazy(() => import("authentication/UserDetails"));
export default function AppRoutes() {
  return (
    <Suspense fallback={"Loading"}>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<HomePageLayout />}>
            <Route path="" element={<Home />} />
            <Route path="users" element={<Users />} />
            <Route path="users/:id" element={<UserDetails />} />
          </Route>
        </Routes>
      </Router>
    </Suspense>
  );
}
