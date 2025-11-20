import React from "react";
import { useContext, useState, useEffect } from "react";
import PrivateRoute from "./middleware/PrivateRoute";
import AdminRoute from "./components/AdminRoute";
import PublicLayout from "./layouts/PublicLayout";
import AdminLayout from "./layouts/AdminLayout";
import NotFound from "./pages/NotFound";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles.css";

// Admin pages
import Dashboard from "./pages/admin/Dashboard";
import Users from "./pages/admin/Users";
import UserTransactions from "./pages/admin/UserTransactions";
import Payments from "./pages/admin/Payments";
import Settings from "./pages/admin/Settings";

// Public pages
import Login from "./pages/Login";
import Register from "./pages/Register";
import Spin from "./pages/Spin";
import Pay from "./pages/Payment";
import Home from "./pages/home";

function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/admin" element={<AdminRoute />}>
            <Route element={<AdminLayout />}>
              <Route index element={<Navigate to="dashboard" replace />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="users" element={<Users />} />
              <Route path="user-transaction/:id" element={<UserTransactions />} />
              <Route path="payments" element={<Payments />} />
              <Route path="settings" element={<Settings />} />
            </Route>
          </Route>

          {/* Always allow access to auth pages */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Catch-all route for 404 */}
          <Route path="*" element={<NotFound />} />

          <Route element={<PublicLayout />}>
            <Route path="/" element={<Home />} />
            <Route
              path="/spin"
              element={
                <PrivateRoute>
                  <Spin />
                </PrivateRoute>
              }
            />
            <Route
              path="/pay"
              element={
                <PrivateRoute>
                  <Pay />
                </PrivateRoute>
              }
            />
          </Route>
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
