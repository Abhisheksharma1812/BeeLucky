import { useContext, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import deafultAvatar from "../images/defaultAvt.jpg";
import { AuthContext } from "../context/AuthContext";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, setUser } = useContext(AuthContext);

    useEffect(() => {
       
    const userToken = localStorage.getItem("token"); // or token
    setIsLoggedIn(!!userToken);
    //setUser (useContext(AuthContext));
  }, [location]);
 

  // 🔹 Hide header on login/register pages
  const hideHeader = ["/login", "/register", "/app"].includes(
    location.pathname
  );
  if (hideHeader) return null; // ✅ after hooks


  // 🔹 Logout function
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser (null);
    localStorage.removeItem("token");
    navigate("/login");
  };
  

  return (
    <header className="relative  bg-gray-900 text-white shadow-md">
      <div className="max-w-10xl flex items-center justify-between px-6 py-7 relative">
         {user && (
          <div className="flex items-center gap-3 z-10">
            <img
              className="w-10 h-10 rounded-full"
              src={deafultAvatar}
              alt=""
            />
            <div className="font-medium dark:text-white">
              <div>{user.username  }</div>
              <div className="text-sm text-gray-400">
                ID: {user._id }
              </div>
            </div>
          </div>
        
          )}

        <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center space-x-8">
          {/* Left Menus (Desktop) */}
          <nav className="hidden md:flex space-x-6">
            <a href="#home" className="hover:text-pink-400 transition">
              Home
            </a>
            <a href="#games" className="hover:text-pink-400 transition">
              Games
            </a>
            <a href="#about" className="hover:text-pink-400 transition">
              About
            </a>
          </nav>

          {/* Logo */}
          <div className="text-2xl font-extrabold text-pink-500">GameVerse</div>

          {/* Right Menus (Desktop) */}
          <nav className="hidden md:flex space-x-6">
            <a href="#faq" className="hover:text-pink-400 transition">
              Faq
            </a>
            <a href="#blog" className="hover:text-pink-400 transition">
              Blog
            </a>
            <a href="#stats" className="hover:text-pink-400 transition">
              Stats
            </a>
          </nav>
        </div>

        {/* 🔹 Show Logout only if logged in */}
        {user ? (
          <button
            onClick={handleLogout}
            className="bg-pink-600 hover:bg-pink-700 px-4 py-2 rounded text-white transition"
          >
            Logout
          </button>
           ) : (
            <>
              <a href="/login">Login</a>
              <a href="/register">Register</a>
            </>
        )}

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* Hamburger Icon */}
          {!isOpen && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
          {/* X Icon */}
          {isOpen && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-gray-800 z-40 px-6 py-4 space-y-4 text-center">
          <a href="#home" className="block hover:text-pink-400">
            Home
          </a>
          <a href="#games" className="block hover:text-pink-400">
            Games
          </a>
          <a href="#about" className="block hover:text-pink-400">
            About
          </a>
          <a href="#faq" className="block hover:text-pink-400">
            FAQ
          </a>
          <a href="#blog" className="block hover:text-pink-400">
            Blog
          </a>
          <a href="#stats" className="block hover:text-pink-400">
            Stats
          </a>

          {/* 🔹 Show Logout only if logged in */}
          {isLoggedIn && (
            <button
              onClick={handleLogout}
              className="bg-pink-600 hover:bg-pink-700 px-4 py-2 rounded text-white transition"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </header>
  );
}
