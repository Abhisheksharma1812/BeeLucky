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
import Bwin from "../images/Bigwin.png";
import cBack from "../images/card-back.png";

//Import components
import Faq from "../components/Faq";


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
        <div className="bg-gradient-to-r from-purple-700 via-purple-800 to-indigo-900">

      <header className="bg-gray-950   overflow-visible " style={{position: 'relative', zIndex: 2}}>
        <div
          className="w-full h-16 px-4 flex items-center justify-between 
                  bg-gradient-to-r from-purple-700 via-purple-800 to-indigo-900 
                   shadow-lg relative"
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

          <div className="myDiv  top-0 translate-y-[70%]">
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
        autoplay={{ delay: 3000 }}
        loop
      >
       <SwiperSlide>
  <div
    className="h-[80vh] flex items-center justify-center bg-gradient-to-r from-purple-700 to-pink-600 text-white"
    style={{
      backgroundImage: `url(${heroImg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      height: "600px",
    }}
  >
    <div className="flex w-full max-w-6xl items-center justify-between">
      {/* Left Side: Text */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
         //whileInView={{ opacity: 1, y: 0 }}
//  viewport={{ once: false, amount: 0.6 }}
       whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
        className="text-left"
      >
        {/* Heading with neon glow */}
        <h2 className="text-7xl font-bold mb-4 text-yellow-400 drop-shadow-[0_0_20px_#9a0094]">
          Win Big With Us!
        </h2>

        {/* Subtext softer but still visible */}
        <p className="text-lg max-w-md  font-bold text-white-230 drop-shadow-[0_0_10px_#9a0094]">
          Play and enjoy exciting rewards. Spin the wheel and grab your chance
          to win big prizes today!
        </p>

        {/* Call-to-action styled like neon button */}
        <button
          whileHover={{ scale: 1.1 }}
          className="mt-6 px-6 py-3 text-lg font-bold text-white-900 
                     bg-transparent  bg-clip-padding border-2 border-yellow-400 rounded-xl shadow-lg
                     hover:bg-yellow-300 transition-all
                     drop-shadow-[0_0_15px_#facc15]"
        >
          Download Now 🎮
        </button>
      </motion.div>



      {/* Right Side: Image */}
      <motion.img
        src={Bwin}
        alt="Big Win"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
        style={{ width: "600px", height: "auto" }}
      />
    </div>
  </div>
</SwiperSlide>



 <SwiperSlide>
  <div
    className="h-[80vh] flex items-center justify-center bg-gradient-to-r from-purple-700 to-pink-600 text-white"
    style={{
      backgroundImage: `url(${cBack})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      height: "600px",
    }}
  >
    <div className="flex w-full max-w-6xl items-center justify-center">
      <motion.div
         initial={{ opacity: 0, y: 50 }}
         whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false, amount: 0.6 }}
        transition={{ duration: 2 }}
        className="flex flex-col items-center text-center"
      >
        <h2 className="text-7xl font-extrabold text-yellow-400 mt-0 drop-shadow-[0_0_15px_#a000ff]">
          Daily Jackpots 🎰
        </h2>

        <p className="text-4xl font-bold max-w-xl text-gray-100 mt-4">
          Don’t miss our special daily jackpots. Bigger rewards, more winners,
          more fun!
        </p>

        <button className="mt-6 px-6 py-3 text-lg font-bold text-white-900 
                            rounded-xl shadow-lg 
                           hover:bg-cyan-300 transition-all 
                           drop-shadow-[0_0_15px_#d2d5d6]">
          Join Now ⚡
        </button>
      </motion.div>
    </div>
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

      </Swiper>
      </div>

      {/* Home Section */}

      <div className="home-container ">
        <h1 className="title">🎡 Fortune Wheel Game</h1>
        <p className="subtitle">Spin the wheel and win exciting rewards!</p>
        <Link to="/spin" className="btn">
          Start Game
        </Link>
      </div>

      <div className="min-h-screen  text-white">
        {/* Game Options */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8  p-8 px-10 pb-10">
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



      <Faq />

      {/* Footer */}
      <footer className="text-center text-white py-6 bg-black/30">
        <p className="text-sm opacity-80">
          © 2025 Casino World. All rights reserved.
        </p>
      </footer>

      </div>
    );  
}   

export default Home;