import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PageErrorBounday } from "./errorboundaries/PageErrorBoundary";
import Loading from "./loading/Loading";
const Login = lazy(() => import("authentication/Login"));
const Register = lazy(() => import("authentication/Register"));
const HomePageLayout = lazy(() => import("./HomePageLayout"));
const Home = lazy(() => import("component/Home"));
const Users = lazy(() => import("authentication/Users"));
const UserDetails = lazy(() => import("authentication/UserDetails"));
export default function AppRoutes() {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <Routes>
          <Route
            path="/login"
            element={
              <PageErrorBounday>
                <Login />
              </PageErrorBounday>
            }
          />
          <Route
            path="/register"
            element={
              <PageErrorBounday>
                <Register />
              </PageErrorBounday>
            }
          />
          <Route path="/" element={<HomePageLayout />}>
            <Route
              path=""
              element={
                <PageErrorBounday>
                  <Home />
                </PageErrorBounday>
              }
            />
            <Route
              path="users"
              element={
                <PageErrorBounday>
                  <Users />
                </PageErrorBounday>
              }
            />
            <Route
              path="users/:id"
              element={
                <PageErrorBounday>
                  <UserDetails />
                </PageErrorBounday>
              }
            />
          </Route>
        </Routes>
      </Router>
    </Suspense>
  );
}
