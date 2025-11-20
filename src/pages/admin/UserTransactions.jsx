import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";



const API = import.meta.env.VITE_API || 'http://localhost:4000/api'


export default function UserTransactions() {
  const { id } = useParams(); // /admin/users/:id/transactions
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(API + `/user-transaction/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });

     
        if (res.data.success) {
          setTransactions(res.data.transactions);
        }
      } catch (err) {
        console.error("Error fetching transactions:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [id]);
  

   const openImage = (url) => setSelectedImage(url);
  const closePopup = () => setSelectedImage(null);

  if (loading) return <div>Loading transactions...</div>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">User Transactions</h2>

      {transactions.length === 0 ? (
        <p>No transactions found.</p>
      ) : (
        <table className="w-full border border-gray-300 bg-white rounded-md">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-3 py-2">#</th>
              <th className="border px-3 py-2">Transaction ID</th>
              <th className="border px-3 py-2">Media</th>
              <th className="border px-3 py-2">Status</th>
              <th className="border px-3 py-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((t, index) => (
              <tr key={t._id}>
                <td className=" px-3 py-2">{index + 1}</td>
                <td className=" px-3 py-2">{t.transactionId}</td>
                        {/* ✅ Show Screenshot(s) */}
              <td className="p-2 border-b">
                {Array.isArray(t.screenshotUrl) && t.screenshotUrl.length > 0 ? (
                  <div className="flex gap-2">
                    {t.screenshotUrl.map((url, i) => (
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
                ) : t.screenshotUrl ? (
                  <img
                    src={`${API.replace("/api", "")}${t.screenshotUrl}`}
                    alt="Screenshot"
                    className="w-12 h-12 object-cover rounded cursor-pointer hover:opacity-80"
                    onClick={() =>
                      openImage(`${API.replace("/api", "")}${t.screenshotUrl}`)
                    }
                  />
                ) : (
                  <span className="text-gray-500 text-sm">No media</span>
                )}
              </td>
                <td
                className={`p-2  font-semibold ${
                  t.status === "completed"
                    ? "text-green-600"
                    : t.status === "pending"
                    ? "text-red-600"
                    : "text-yellow-600"
                }`}
              >
                {t.status}
              </td>

                <td className=" px-3 py-2">
                  {new Date(t.createdAt).toISOString().slice(0, 16).replace('T', ' ')}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
