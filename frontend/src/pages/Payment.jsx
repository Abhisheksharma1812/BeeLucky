 import { QRCodeCanvas } from "qrcode.react";

export default function PaymentQR() {
 const upiString = `upi://pay?pa=abhishekprinja24-1@okaxis&pn=Abhishek&am=200&cu=INR&tn=TXN-${Date.now()}`;

  return (
    <div className="flex flex-col items-center p-4">
      <h2 className="text-lg font-bold mb-2">Pay with UPI</h2>
      <QRCodeCanvas value={upiString} size={200} />
      <p className="mt-2">Scan to pay via GPay / Paytm</p>
    </div>
  );
}



/* import { useState, useEffect } from "react";
import { QRCodeCanvas } from "qrcode.react";

export default function TimedPaymentQR() {
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes
  const upiString = `upi://pay?pa=abhishekprinja24-1@okaxis&pn=Abhishek&am=200&cu=INR&tn=TXN-${Date.now()}`;

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((t) => (t > 0 ? t - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center">
      <QRCodeCanvas value={upiString} size={200} />
      <p className="mt-2">Expires in: {timeLeft}s</p>
    </div>
  );
}
 */
