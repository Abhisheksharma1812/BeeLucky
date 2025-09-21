import React, { useState } from "react";
import Wheel from "../components/Wheel";
import Bet from "../components/Bet";

function Spin() {
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="spin-container bg-gradient-to-r from-purple-700 via-purple-800 to-indigo-900 
     text-white">
      <h2 className="game-title text-center text-7xl font-bold">Spin The Wheel</h2>

      <Wheel
        selectedPrice={selectedPrice}
        showPopup={showPopup}
        setShowPopup={setShowPopup}
      />

      {/* Bet selection */}
      <Bet
        selectedPrice={selectedPrice}
        setSelectedPrice={setSelectedPrice}
        showPopup={showPopup}
        setShowPopup={setShowPopup}
      />
    </div>
  );
}

export default Spin;
