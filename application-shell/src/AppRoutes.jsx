import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "authentication/Login";
import Register from "authentication/Register";
import HomePageLayout from "./HomePageLayout";
import Users from "authentication/Users";
import Home from "authentication/Home";
import UserDetails from "authentication/UserDetails";
export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/" element={<HomePageLayout />}>
          <Route path="" element={<Home/>}/>
          <Route path="users" element={<Users />} />
          <Route path="users/:id" element={<UserDetails />} />
        </Route>
      </Routes>
    </Router>
  );
}
