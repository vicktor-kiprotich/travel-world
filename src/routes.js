// Routes.js
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
// import Home from './pages/Home';
import AppLayout from "./layouts/AppLayout";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/home";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <AppLayout>
              <Home />
            </AppLayout>
          }
        />

        <Route
          path="/signup"
          element={
            <AppLayout>
              <SignUp />
            </AppLayout>
          }
        />

        <Route
          path="/signin"
          element={
            <AppLayout>
              <SignIn />
            </AppLayout>
          }
        />

        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
