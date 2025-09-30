import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative  bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Left Menus (Desktop) */}
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-pink-400 transition">Home</a>
          <a href="#" className="hover:text-pink-400 transition">Games</a>
          <a href="#" className="hover:text-pink-400 transition">Reviews</a>
        </nav>

        {/* Logo */}
        <div className="text-2xl font-extrabold text-pink-500">
          GameVerse
        </div>

        {/* Right Menus (Desktop) */}
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-pink-400 transition">Esports</a>
          <a href="#" className="hover:text-pink-400 transition">Community</a>
          <a href="#" className="hover:text-pink-400 transition">About</a>
        </nav>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* Hamburger Icon */}
          {!isOpen && (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
          {/* X Icon */}
          {isOpen && (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-gray-800 z-40 px-6 py-4 space-y-4 text-center">

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
