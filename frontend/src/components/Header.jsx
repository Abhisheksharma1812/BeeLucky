import { useState } from "react";
import { Menu, X } from "lucide-react"; // icons (install lucide-react or swap with any)

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Left Menus */}
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-pink-400 transition">Home</a>
          <a href="#" className="hover:text-pink-400 transition">Games</a>
          <a href="#" className="hover:text-pink-400 transition">Reviews</a>
        </nav>

        {/* Logo */}
        <div className="text-2xl font-extrabold text-pink-500">
          GameVerse
        </div>

        {/* Right Menus */}
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-pink-400 transition">Esports</a>
          <a href="#" className="hover:text-pink-400 transition">Community</a>
          <a href="#" className="hover:text-pink-400 transition">About</a>
        </nav>

        {/* Mobile Button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 px-6 py-4 space-y-4 text-center">
          <a href="#" className="block hover:text-pink-400">Home</a>
          <a href="#" className="block hover:text-pink-400">Games</a>
          <a href="#" className="block hover:text-pink-400">Reviews</a>
          <a href="#" className="block hover:text-pink-400">Esports</a>
          <a href="#" className="block hover:text-pink-400">Community</a>
          <a href="#" className="block hover:text-pink-400">About</a>
        </div>
      )}
    </header>
  );
}
