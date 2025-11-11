import { Outlet, NavLink } from "react-router-dom";

export default function AdminLayout() {

    const handleLogout = () => {
   // localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white flex flex-col">
        <div className="p-4 text-2xl font-bold border-b border-gray-700">Admin</div>
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            <li>
              <NavLink
                to="/admin/dashboard"
                className={({ isActive }) =>
                  `block p-2 rounded hover:bg-gray-700 ${
                    isActive ? "bg-gray-700" : ""
                  }`
                }
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/users"
                className={({ isActive }) =>
                  `block p-2 rounded hover:bg-gray-700 ${
                    isActive ? "bg-gray-700" : ""
                  }`
                }
              >
                Users
              </NavLink>
            </li>
                 <li>
              <NavLink
                to="/admin/payments"
                className={({ isActive }) =>
                  `block p-2 rounded hover:bg-gray-700 ${
                    isActive ? "bg-gray-700" : ""
                  }`
                }
              >
                Payments
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/settings"
                className={({ isActive }) =>
                  `block p-2 rounded hover:bg-gray-700 ${
                    isActive ? "bg-gray-700" : ""
                  }`
                }
              >
                Settings
              </NavLink>
            </li>

               <li>
              <NavLink className="block p-2 rounded hover:bg-gray-700"
               onClick={handleLogout}  >
                Logout
              </NavLink>
            </li>

          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
}
