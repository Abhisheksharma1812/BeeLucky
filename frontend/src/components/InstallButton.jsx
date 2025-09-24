import React, { useState, useEffect } from "react";

function InstallButton() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showButton, setShowButton] = useState(true);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);  // Save the event
      setShowButton(false);   // Show button when app is installable
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt(); // Show the install popup

    const choice = await deferredPrompt.userChoice;
    if (choice.outcome === "accepted") {
      console.log("✅ User accepted the install");
    } else {
      console.log("❌ User dismissed the install");
    }
    setDeferredPrompt(null);
    setShowButton(false);
  };

  return (
    <>
      {showButton && (
        <button
          onClick={handleInstallClick}
          style={{
            padding: "10px 20px",
            backgroundColor: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            marginTop: "20px"
          }}
        >
          📲 Install App
        </button>
      )}
    </>
  );
}

export default InstallButton;
