import React, { useState } from "react";

export default function Wheel({ selectedPrice, setSelectedPrice, showPopup, setShowPopup }) {
  const prizes = [
    "0.1x",
    "1.3x",
    "Try Again",
    "3x",
    "0.2x",
    "1x",
    "Try Again",
    "2x",
    "5x",
    "Try Again",
  ];

  const [rotation, setRotation] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState(null);
  const [targetIndex, setTargetIndex] = useState(null);

  const spinWheel = () => {
    /* 
     if (selectedPrice && selectedPrice > 0) {
      console.log("Bet Placed:", selectedPrice);
      setShowPopup(false);
      setSpinning(true);

    } else {
      // open popup if no price selected
        setShowPopup(true);
        setSpinning(false);
    }

  if (spinning) return; */

    if (!selectedPrice) {
      setShowPopup(true); // 🚀 show popup if no bet
      return;
    }
    if (spinning) return;

    setSpinning(true);
    
    // const sliceDeg = 360 / prizes.length;
    const sliceDeg = 360 / prizes.length;
    const labelOffset = -90; // shift so top pointer is reference

    //console.log(sliceDeg);

    const idx = Math.floor(Math.random() * prizes.length);
    setTargetIndex(idx);

    const stopAngle = idx * sliceDeg + sliceDeg / 10; // ✅ adjust to stop at center of slice
    const current = ((rotation % 360) + 360) % 360;
    //const pointerOffset = 90; // ✅ stop at 90°
    const pointerOffset = 270; // pointer at top, facing down
    const target = (360 - stopAngle + pointerOffset) % 360;

    let delta = target - current;
    if (delta < 0) delta += 360;

    const fullSpins = 5 + Math.floor(Math.random() * 3);
    const newRotation = rotation + fullSpins * 360 + delta;
 
    setRotation(newRotation);
  };
  const handleEnd = () => {
    if (!spinning) return;
    setSpinning(false);
    
    setSelectedPrice(null);
    if (targetIndex !== null) setResult(prizes[targetIndex]);
  };

  return (
    <div className="wheel-container">
      {/* fixed pointer */}
      <div className="wheel-pointer"></div>

      {/* wheel */}
      <div
        className="wheel"
        style={{
          transform: `rotate(${rotation}deg)`,
          transition: spinning ? "transform 4s ease-out" : "none",
        }}
        onTransitionEnd={handleEnd}
      >
        {prizes.map((p, i) => {
          const angle = (360 / prizes.length) * i;
          const isTryAgain = p === "Try Again"; // check text
          return (
            <div
              key={i}
              className="wheel-label"
              style={{
                transform: isTryAgain
                  ? `rotate(${angle}deg) translate(150px) rotate(-${
                      angle - 12
                    }deg)` // slight correction
                  : `rotate(${angle}deg) translate(150px) rotate(-${angle}deg)`,
                fontSize: isTryAgain ? "12px" : "18px", // optional tweak
                color: isTryAgain ? "#ffeb3b" : "#fff", // optional: highlight Try Again
              }}
            >
              {p}
            </div>
          );
        })}
      </div>

      <button className="spin-btn" onClick={spinWheel} disabled={spinning}>
        {spinning ? "Spinning" : "Spin"}
      </button>

      {result && (
        <div className="popup-overlay">
          <div className="popup">
            <h3>🎉 Result: {result}</h3>
            <button
              onClick={() => {
                setResult(null);
                setRotation(0); // reset wheel after closing popup
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}

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
