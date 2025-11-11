import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export default function Payments() {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const API = import.meta.env.VITE_API || "http://localhost:4000/api";

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        //const res = await axios.get(`${API}/payments-all`);
        const res = await axios.get(`${API}/payments-all`,{
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setPayments(res.data.data);
      } catch (err) {
        console.error("Error fetching payments:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchPayments();
  }, []);


    const toggleStatus = async ({ id, currentStatus }) => {
    try {
      const action = currentStatus === "pending" ? "completed" : "pending";

      const result = await Swal.fire({
        title: `Are you sure you want to ${action} this payment?`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes",
        cancelButtonText: "Cancel",
      });

      if (!result.isConfirmed) return;

      const res = await axios.put(
        `${API}/payment/${id}/status`,
        { currentStatus: currentStatus },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      setPayments(
        payments.map((u) => (u._id === id ? { ...u, status: res.data.status } : u))
      );
    } catch (err) {
      console.error(err);
    }
  };


  const approvePayment = async (id, amount) => {
  if (!amount || amount <= 0) {
    Swal.fire("Please enter a valid amount", "", "warning");
    return;
  }

  try {
    const confirm = await Swal.fire({
      title: `Approve payment with ₹${amount}?`,
      icon: "question",
      showCancelButton: true,
    });
    if (!confirm.isConfirmed) return;

    const res = await axios.put(
      `${API}/payment/${id}/approve`,
      { amount },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    Swal.fire("Approved!", "Points assigned successfully", "success");
    setPayments(
      payments.map((p) =>
        p._id === id ? { ...p, status: "completed" } : p
      )
    );
  } catch (err) {
    console.error(err);
    Swal.fire("Error", "Failed to approve payment", "error");
  }
};


  

  const openImage = (url) => setSelectedImage(url);
  const closePopup = () => setSelectedImage(null);

  if (loading) return <p className="p-6">Loading payments...</p>;

  return (
    <div className="p-6 relative">
      <h1 className="text-2xl font-bold mb-4">Payments</h1>
      <table className="w-full border border-gray-300 bg-white rounded-md">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-2 border-b">#</th>
            <th className="p-2 border-b">User</th>
            <th className="p-2 border-b">Media</th>
            <th className="p-2 border-b">Status</th>
            <th className="p-2 border-b">Date</th>
            <th className="px-4 py-2 col-span-2 font-semibold text-gray-700">Actions</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((p, index) => (
            <tr key={p._id} className="hover:bg-gray-50">
              <td className="p-2 border-b">{index + 1}</td>
              <td className="p-2 border-b">{p.user_id?.username || "Unknown"}</td>

              {/* ✅ Show Screenshot(s) */}
              <td className="p-2 border-b">
                {Array.isArray(p.screenshotUrl) && p.screenshotUrl.length > 0 ? (
                  <div className="flex gap-2">
                    {p.screenshotUrl.map((url, i) => (
                      <img
                        key={i}
                        src={`${API.replace("/api", "")}${url}`} // handles /uploads path
                        alt="Screenshot"
                        className="w-12 h-12 object-cover rounded cursor-pointer hover:opacity-80"
                        onClick={() =>
                          openImage(`${API.replace("/api", "")}${url}`)
                        }
                      />
                    ))}
                  </div>
                ) : p.screenshotUrl ? (
                  <img
                    src={`${API.replace("/api", "")}${p.screenshotUrl}`}
                    alt="Screenshot"
                    className="w-12 h-12 object-cover rounded cursor-pointer hover:opacity-80"
                    onClick={() =>
                      openImage(`${API.replace("/api", "")}${p.screenshotUrl}`)
                    }
                  />
                ) : (
                  <span className="text-gray-500 text-sm">No media</span>
                )}
              </td>

              <td
                className={`p-2 border-b font-semibold ${
                  p.status === "completed"
                    ? "text-green-600"
                    : p.status === "pending"
                    ? "text-red-600"
                    : "text-yellow-600"
                }`}
              >
                {p.status}
              </td>

                <td className="p-2 border-b">
                    {new Date(p.createdAt).toISOString().slice(0, 16).replace('T', ' ')}
                </td>
            <td className="p-2 border-b">
              {p.status === "pending" ? (
                <input
                  type="number"
                  placeholder="Enter amount"
                  className="border rounded p-1 w-24"
                  value={p.amount || ""}
                  onChange={(e) =>
                    setPayments(
                      payments.map((u) =>
                        u._id === p._id ? { ...u, amount: e.target.value } : u
                      )
                    )
                  }
                />
              ) : (
                <span>{p.amount}</span>
              )}
 
        <button
          onClick={() => approvePayment(p._id, p.amount)}
          disabled={p.status === "completed"}
          className={`px-3 py-1 rounded ${
            p.status === "pending"
              ? "bg-green-600 text-white"
              : "bg-gray-400 text-white cursor-not-allowed"
          }`}
        >
          {p.status === "pending" ? "Approve" : "Approved"}
        </button>
      </td>

            {/*      <td className="p-2">
                  <button
                    onClick={() =>
                      toggleStatus({ id: p._id, currentStatus: p.status })
                    }
                    className={`px-3 py-1 rounded ${
                      p.status === "pending"
                        ? "bg-red-500 text-white"
                        : "bg-green-500 text-white"
                    }`}
                  >
                    {p.status === "pending" ? "completed" : "pending"}
                  </button>

                </td> */}
            </tr>
          ))}
        </tbody>
      </table>

      {/* ✅ Popup Modal for Full Image */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={closePopup}
        >
          <div className="relative">
            <img
              src={selectedImage}
              alt="Payment Screenshot"
              className="max-h-[80vh] max-w-[90vw] rounded shadow-lg"
            />
            <button
              onClick={closePopup}
              className="absolute top-2 right-2 bg-white text-black px-3 py-1 rounded"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
