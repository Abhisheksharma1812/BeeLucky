import { useEffect, useState } from "react";
import axios from "axios";

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
                  p.status === "success"
                    ? "text-green-600"
                    : p.status === "failed"
                    ? "text-red-600"
                    : "text-yellow-600"
                }`}
              >
                {p.status}
              </td>

              <td className="p-2 border-b">
                  {new Date(p.createdAt).toISOString().slice(0, 16).replace('T', ' ')}
              </td>
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
