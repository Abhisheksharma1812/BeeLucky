import { Navigate, Outlet } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

export default function AdminRoute() {
  const token = localStorage.getItem("token") || null; //JSON.parse(localStorage.getItem("user")); // your stored user after login
  const user = token && jwtDecode(token); //const user
 //console.log(user); return false;
  if (token === null) {
    return <Navigate to="/login" />;
  }else if(token && user.role_id !== 1) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
}
