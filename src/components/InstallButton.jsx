import React, { useState, useEffect } from "react";

function InstallButton() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e); // Save the event
      setShowButton(true); // Show button when app is installable
    };

    // Hide button once app is installed
    const installedHandler = () => {
      console.log("✅ App installed");
      setShowButton(false);
    };

    window.addEventListener("beforeinstallprompt", handler);
    window.addEventListener("appinstalled", installedHandler);

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
      window.removeEventListener("appinstalled", installedHandler);
    };
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
      /*     style={{
            padding: "10px 20px",
            backgroundColor: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            marginTop: "20px",
          }} */
              whileHover={{ scale: 1.1 }}
          className="mt-6 px-6 py-3 text-lg font-bold text-white-900 
                     bg-transparent  bg-clip-padding border-2 border-yellow-400 rounded-xl shadow-lg
                     hover:bg-yellow-300 transition-all
                     drop-shadow-[0_0_15px_#facc15]"
        >
          📲 Install App
        </button>
      )}
    </>
  );
}

export default InstallButton;
