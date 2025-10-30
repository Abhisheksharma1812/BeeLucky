import { Navigate, Outlet } from "react-router-dom";

export default function AdminRoute() {
  const user = JSON.parse(localStorage.getItem("user")); // your stored user after login

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (user.role_id !== 1) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
}
