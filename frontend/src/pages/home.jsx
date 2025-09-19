import React from "react";
import { motion } from "framer-motion";
import { Dice1, DollarSign, Gamepad2, Star } from "lucide-react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


import heroImg from "../images/pLandscape.png";
import SImg from "../images/Bl-pBanner.png";



// Import required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";

function Home() {
      const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  const games = [
    { title: "Spin Wheel", icon: <Gamepad2 className="w-10 h-10" /> },
    { title: "Dice Roll", icon: <Dice1 className="w-10 h-10" /> },
    { title: "Lucky Cards", icon: <Star className="w-10 h-10" /> },
    { title: "Jackpot Slots", icon: <DollarSign className="w-10 h-10" /> },
  ];

    return (
        <div>

      <header className="bg-gray-950   overflow-visible " style={{position: 'relative', zIndex: 2}}>
        <div
          className="w-full h-16 px-4 flex items-center justify-between 
                  bg-gradient-to-r from-purple-700 via-purple-800 to-indigo-900 
                  rounded-b-2xl shadow-lg relative"
        >
          {/* Left Section */}
          <div className="flex items-center space-x-3">
            {/* add icons or menu later */}
            <nav className="left-navbar">
              <ul id="menu">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Center Logo with Diamond Shape */}

          <div className="myDiv absolute left-1/2 -translate-x-1/2 top-0 translate-y-[70%]">
            <div
              className="w-60 h-10 bg-gradient-to-r from-purple-700 via-purple-800 to-indigo-900
                  flex items-center justify-center text-green-400 
                  font-extrabold text-2xl tracking-wide drop-shadow-md
                  clip-diamond"
            >
              <p className="Logo">🎡</p> <p className="Logo">JadeSweep</p>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-3">
            {/* add buttons/profile later */}
            <nav className="right-navbar">
              <ul id="menu">
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Swiper Component */}

      <div>
      <Swiper
        className=""
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        //autoplay={{ delay: 3000 }}
        loop
      >
        <SwiperSlide>
          <div
            className="h-[80vh] flex flex-col justify-center items-center bg-gradient-to-r from-purple-700 to-purple-500 text-white"
            style={{
              backgroundImage: `url(${heroImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%",
              height: "500px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <h1 className="text-4xl font-bold mb-4">Welcome to My Website</h1>
            <p className="text-lg mb-6">Professional UI with a purple theme</p>
            <button className="px-6 py-3 rounded-xl shadow-md glow-btn">
              Join Now
            </button>
          </div>
        </SwiperSlide>

        <SwiperSlide
          style={{
            backgroundImage: `url(${SImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            height: "500px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="h-[80vh] flex justify-center items-center bg-purple-900 text-white">
            <h2 className="text-3xl font-semibold">Slide 2 Content</h2>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="h-[80vh] flex justify-center items-center bg-purple-800 text-white"
            style={{
              backgroundImage: `url(${heroImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%",
              height: "500px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <h2 className="text-3xl font-semibold">Slide 3 Content</h2>
          </div>
        </SwiperSlide>
      </Swiper>
      </div>

      {/* Home Section */}

      <div className="home-container">
        <h1 className="title">🎡 Fortune Wheel Game</h1>
        <p className="subtitle">Spin the wheel and win exciting rewards!</p>
        <Link to="/spin" className="btn">
          Start Game
        </Link>
      </div>

      <div className="min-h-screen bg-gradient-to-r from-purple-700 via-purple-800 to-indigo-900 text-white">
        {/* Game Options */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8  p-8 px-10 pb-20">
          {games.map((game, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative group bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-10 text-center cursor-pointer overflow-hidden"
            >
              {/* Game Icon */}
              <motion.div
                initial={{ rotate: -20, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="mb-4 text-yellow-400"
              >
                {game.icon}
              </motion.div>

              {/* Game Title */}
              <h3 className="text-xl font-bold">{game.title}</h3>

              {/* Coming Soon Overlay (only if NOT Spin Wheel) */}
              {game.title !== "Spin Wheel" && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/70 text-white text-2xl font-bold opacity-0 group-hover:opacity-100 transition">
                  Coming Soon
                </div>
              )}
            </motion.div>
          ))}
        </section>
      </div>

      {/* Footer */}
      <footer className="text-center py-6 bg-black/30">
        <p className="text-sm opacity-80">
          © 2025 Casino World. All rights reserved.
        </p>
      </footer>

      </div>
    );  
}   

export default Home;