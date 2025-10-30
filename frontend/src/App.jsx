import React from "react";
import PrivateRoute from "./middleware/PrivateRoute";
import AdminRoute from "./components/AdminRoute";
import PublicLayout from "./layouts/PublicLayout";
import AdminLayout from "./layouts/AdminLayout";
import Header from "./components/Header";
import NotFound from "./pages/NotFound";
import { Routes, Route ,Navigate  } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles.css";

import Dashboard from "../src/pages/admin/Dashboard";
import Users from "../src/pages/admin/Users";
import Payments from "../src/pages/admin/Payments";
import Settings from "../src/pages/admin/Settings";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Spin from "./pages/Spin";
import Pay from "./pages/Payment";
import Home from "./pages/home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/admin" element={<AdminRoute />}>
          <Route element={<AdminLayout />}>
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="users" element={<Users />} />
            <Route path="payments" element={<Payments />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Route>

        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
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

        {/* Catch-all route for 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
