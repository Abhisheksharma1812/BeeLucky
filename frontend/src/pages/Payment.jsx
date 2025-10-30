import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
const API = import.meta.env.VITE_API || 'http://localhost:4000/api'


export default function PaymentQR() {
  // replace with your UPI details
  const upiId = "paytmqr5ojr4q@ptys-emp";
  const name = "BeeLucky";
  const amount = "1"; // optional, can also keep blank
  const note = "Payment for services";

  const upiLink = `upi://pay?pa=${upiId}&pn=${encodeURIComponent( 
    name
  )}&am=${amount}&tn=${encodeURIComponent(note)}&cu=INR`;


  const [form, setForm] = useState({
    email: "",
    transactionId: "",
    screenshot: null, // optional
  });



  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "screenshot") {
      setForm({ ...form, screenshot: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare form data (so file can be uploaded too)
    const formData = new FormData();
    Object.keys(form).forEach((key) => {
      formData.append(key, form[key]);
    });

      const token = localStorage.getItem("token");
    
    await fetch(API + "/auth/save-payment", {
      method: "POST",
       headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
    });

    alert("Payment details submitted! Admin will verify soon.");
  };

  return (
    <div className="bg-gradient-to-r from-purple-700 via-purple-800 to-indigo-900 min-h-screen text-white center justify-center align-items-center">
    <div className="text-white">
      <h2>Scan & Pay</h2>
      <QRCodeCanvas className="mt-4" value={upiLink} size={150} />
      <p style={{ marginTop: "10px" }}></p>
    </div>

    <div className="payment-confirmation-form" style={{ marginLeft: "50px", color: "white" }}>
      <h2> Add Payment Confirmation Details </h2>
      
       {/* Payment Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white text-black p-4 rounded-lg shadow-md space-y-4 w-full max-w-md"
      >

        {/* Email */}
        <div className="flex items-center">
          <label className="w-32">Email:</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            required
            className="flex-1 border rounded p-2"
          />
        </div>

        {/* Transaction ID */}
        <div className="flex items-center">
          <label className="w-32">Transaction ID:</label>
          <input
            type="text"
            name="transactionId"
            onChange={handleChange}
            required
            className="flex-1 border rounded p-2"
          />
        </div>

        {/* Screenshot Upload (Optional) */}
        <div className="flex items-center">
          <label className="w-32">Screenshot:</label>
          <input
            type="file"
            name="screenshot"
            accept="image/*"
            onChange={handleChange}
            className="flex-1"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Submit Payment
        </button>
      </form>
    </div>
    
    </div>
  );
} 

