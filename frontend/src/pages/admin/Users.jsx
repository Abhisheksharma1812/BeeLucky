import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // ✅ fix: import Link from here
import axios from "axios";
import Swal from "sweetalert2";
import { Trash2, Eye, PowerOff } from "lucide-react";

const API = import.meta.env.VITE_API || "http://localhost:4000/api";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ moved fetchUsers outside useEffect to reuse in deleteUser()
  const fetchUsers = async () => {
    try {
      const res = await axios.get(`${API}/users-all`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setUsers(res.data?.data || []); // assuming API returns { success, data: [] }
    } catch (err) {
      console.error("Error fetching users:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // ✅ Toggle user status
  const toggleStatus = async ({ id, currentStatus }) => {
    try {
      const action = currentStatus === "active" ? "deactivate" : "activate";

      const result = await Swal.fire({
        title: `Are you sure you want to ${action} this user?`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes",
        cancelButtonText: "Cancel",
      });

      if (!result.isConfirmed) return;

      const res = await axios.put(
        `${API}/user/${id}/status`,
        { currentStatus },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      setUsers((prev) =>
        prev.map((u) => (u._id === id ? { ...u, status: res.data.status } : u))
      );
    } catch (err) {
      console.error("Error toggling status:", err);
    }
  };

  // ✅ Delete user
  const deleteUser = async (id) => {
    const result = await Swal.fire({
      title: `Are you sure you want to delete this user?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "Cancel",
    });

    if (!result.isConfirmed) return;

    try {
      await axios.delete(`${API}/user/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      fetchUsers(); // ✅ reload list
    } catch (err) {
      console.error("Error deleting user:", err);
      Swal.fire("Error", "Failed to delete user", "error");
    }
  };

  // ✅ Role mapping
  const getRoleName = (roleId) => {
    switch (roleId) {
      case 1:
        return "Admin";
      case 2:
        return "User";
      default:
        return "Unknown";
    }
  };

  if (loading) {
    return (
      <div className="p-6 text-center">
        <p>Loading users...</p>
      </div>
    );
  }

  if (users.length === 0) {
    return (
      <div className="p-6 text-center">
        <p>No users found.</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full text-sm text-left border border-gray-200">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="px-4 py-2 font-semibold text-gray-700">#</th>
              <th className="px-4 py-2 font-semibold text-gray-700">Name</th>
              <th className="px-4 py-2 font-semibold text-gray-700">Email</th>
              <th className="px-4 py-2 font-semibold text-gray-700">Role</th>
              <th className="px-4 py-2 font-semibold text-gray-700">Created At</th>
              <th className="px-4 py-2 font-semibold text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                key={user._id || index}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{user.username || user.name}</td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2">{getRoleName(user.role_id)}</td>
                <td className="px-4 py-2">
                  {new Date(user.createdAt).toISOString().slice(0, 10)}
                </td>
                <td className="flex items-center gap-2 px-4 py-2">
                  {/* Toggle Status */}
                  <button
                    onClick={() =>
                      toggleStatus({ id: user._id, currentStatus: user.status })
                    }
                    className={`px-3 py-1 rounded ${
                      user.status === "active"
                        ? "bg-red-500 text-white"
                        : "bg-green-500 text-white"
                    }`}
                  >
                    {user.status === "active" ? "Deactivate" : "Activate"}
                  </button>

                  {/* Delete User */}
                  <button
                    onClick={() => deleteUser(user._id)}
                    className="text-red-600 hover:text-red-800"
                    title="Delete User"
                  >
                    <Trash2 size={18} />
                  </button>

                  {/* View Transactions */}
                  <Link
                    to={`/admin/user-transaction/${user._id}`}
                    className="text-blue-600 hover:text-blue-800"
                    title="View Transactions"
                  >
                    <Eye size={18} />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
