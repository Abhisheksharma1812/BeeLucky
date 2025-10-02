 import React from "react";
import { QRCodeCanvas } from "qrcode.react";

export default function PaymentQR() {
  // replace with your UPI details
  const upiId = "paytmqr5ojr4q@ptys-emp";
  const name = "BeeLucky";
  const amount = "1"; // optional, can also keep blank
  const note = "Payment for services";

  const upiLink = `upi://pay?pa=${upiId}&pn=${encodeURIComponent( 
    name
  )}&am=${amount}&tn=${encodeURIComponent(note)}&cu=INR`;

  return (
    <div className="bg-gradient-to-r from-purple-700 via-purple-800 to-indigo-900 min-h-screen flex items-center justify-center">
    <div className="text-white" style=  {{ textAlign: "center", marginTop: "20px" }}>
      <h2>Scan & Pay</h2>
      <QRCodeCanvas class="mt-4" value={upiLink} size={150} />
      <p style={{ marginTop: "10px" }}></p>
    </div>
    </div>
  );
} 

