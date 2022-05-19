import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "authentication/Login";
import Register from "authentication/Register";
import HomePageLayout from "./HomePageLayout";
// import Home from "Home/Home"
import User from "authentication/User";
import UserDetails from "authentication/UserDetails";
import Profile from "authentication/Profile";
export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/" element={<HomePageLayout />}>
          {/* <Route path="" element={<Home/>}/> */}
          <Route path="profile" element={<Profile />} />
          <Route path="users" element={<User />} />
          <Route path="users/:id" element={<UserDetails />} />
        </Route>
      </Routes>
    </Router>
  );
}
