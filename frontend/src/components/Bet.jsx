import React, { useState } from "react";

function PriceSelect({
  selectedPrice,
  setSelectedPrice,
  showPopup,
  setShowPopup,
}) {
  const prices = [10, 20, 50, 100, 200,500];
  /* 
  const handlePlaceBet = () => {
    if (selectedPrice && selectedPrice > 0) {
      console.log("Bet Placed:", selectedPrice);
      setShowPopup(false);
    } else {
      // open popup if no price selected
      setShowPopup(true);
    }
  };
  */

  return (
    <div>
      <div className="flex flex-col items-center justify-center text-white">
        <h2 className="text-2xl font-bold mb-6">Select Your Bet Amount</h2>

        {/* Price options */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {prices.map((price, index) => (
            <button
              key={index}
              onClick={() => setSelectedPrice(price)}
              className={`px-6 py-3 rounded-2xl font-semibold shadow-md transition-all
                ${
                  selectedPrice === price
                    ? "bg-yellow-400 text-black scale-110"
                    : "bg-gray-700 hover:bg-yellow-500"
                }`}
            >
              ₹{price}
            </button>
          ))}
        </div>

        {/* Selected price info */}
        {selectedPrice && (
          <p className="mb-6 text-lg">
            Selected Bet: <span className="font-bold">₹{selectedPrice}</span>
          </p>
        )}

        {/* Input field */}
        <input
          type="number"
          placeholder="Enter custom amount"
          className="mb-6 px-4 py-2 rounded-2xl bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
          onChange={(e) => setSelectedPrice(Number(e.target.value))}
        />

        {/* 
      <button
         onClick={handlePlaceBet}
        className={`px-8 py-3 rounded-2xl font-bold text-lg transition-all
          ${
            selectedPrice
              ? "bg-green-500 hover:bg-green-600"
              : "bg-gray-600 cursor-not-allowed"
          }`}
      >
        Place Bet & Spin 🎰
      </button> */}
      </div>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <h3>Set your Bet Amount </h3>
            <button onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PriceSelect;
