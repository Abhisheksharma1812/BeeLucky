import React, { useState, useEffect } from "react";
   
function InstallButton() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showButton, setShowButton] = useState(true);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);  // Save the event
      setShowButton(true);   // Show button when app is installable
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
