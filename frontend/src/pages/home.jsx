import React from "react";
import { motion } from "framer-motion";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import InstallButton from "../components/InstallButton";


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import heroImg from "../images/pLandscape.png";
import imgCoin from "../images/imageCoin.png";
import Bwin from "../images/Bigwin.png";
import cBack from "../images/card-back.png";

//Import components
import Faq from "../components/Faq";
import Games from "../components/Games";
import About from "../components/About";
import Stats from "../components/Stats";
import Blog from "../components/Blog";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import Header from "../components/Header";

// Import required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";

function Home() {
  return (
    <div className="bg-gradient-to-r from-purple-700 via-purple-800 to-indigo-900">

    {/*   <header
        className="bg-gray-950   overflow-visible "
        style={{ position: "relative", zIndex: 2 }}
      >
        <div
          className="w-full h-16 px-4 flex items-center justify-between 
                  bg-gradient-to-r from-purple-700 via-purple-800 to-indigo-900 
                   shadow-lg relative"
        >
        
          <div className="flex items-center space-x-3">
                     <nav className="left-navbar">
              <ul id="menu">
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">About us</a>
                </li>
                  <li>
                  <a href="#games">Games</a>
                </li>
              </ul>
            </nav>
          </div>

          

          <div className="myDiv  top-0 translate-y-[70%]">
            <div
              className="w-60 h-10 bg-gradient-to-r from-purple-700 via-purple-800 to-indigo-900
                  flex items-center justify-center text-green-400 
                  font-extrabold text-2xl tracking-wide drop-shadow-md
                  clip-diamond"
            >
              <p className="Logo">🎡</p> <p className="Logo">GameVerse</p>
            </div>
          </div>

       
          <div className="flex items-center space-x-3">
           
            <nav className="right-navbar">
              <ul id="menu">
                <li>
                  <a href="#faq">FAQ</a>
                </li>
                <li>
                  <a href="#stats">Stats</a>
                </li>
                 <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header> */}

      {/* Swiper Component */}

       <div
      id="home"
      className="relative h-[50vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] xl:h-[100vh] "
    >
      <Swiper
        className="w-full h-full"
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop
        autoplay={{ delay: 3000, disableOnInteraction: false }}
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div
            className="flex h-full items-center justify-center text-white bg-gradient-to-r from-purple-700 to-pink-600"
            style={{
              backgroundImage: `url(${heroImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="flex flex-col md:flex-row w-full max-w-6xl items-center justify-between gap-6 px-4">
              {/* Left Side: Text */}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 2 }}
                className="text-center md:text-left"
              >
                <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-yellow-400 drop-shadow-[0_0_20px_#9a0094]">
                  Win Big With Us!
                </h2>

                <p className="text-base sm:text-lg md:text-xl max-w-md mx-auto md:mx-0 font-bold text-gray-100 drop-shadow-[0_0_10px_#9a0094]">
                  Play and enjoy exciting rewards. Spin the wheel and grab your
                  chance to win big prizes today!
                </p>

                <div className="mt-6">
                  <InstallButton />
                </div>
              </motion.div>

              {/* Right Side: Image */}
              <motion.img
                src={Bwin}
                alt="Big Win"
                className="w-40 sm:w-64 md:w-[400px] lg:w-[600px] h-auto mx-auto md:mx-0 object-contain"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 2 }}
              />
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div
            className="flex h-full items-center justify-center text-white bg-gradient-to-r from-purple-700 to-pink-600"
            style={{
              backgroundImage: `url(${cBack})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="flex w-full max-w-6xl items-center justify-center px-4">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.6 }}
                transition={{ duration: 2 }}
                className="flex flex-col items-center text-center"
              >
                <h2 className="sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-yellow-400 drop-shadow-[0_0_15px_#a000ff]">
                  Daily Jackpots 🎰
                </h2>

                <p className="sm:text-lg md:text-xl max-w-md font-bold text-gray-100 mt-4">
                  Don’t miss our special daily jackpots. Bigger rewards, more
                  winners, more fun!
                </p>

                <button
                  className="mt-6 px-6 py-3 text-lg font-bold text-white bg-transparent border-2 border-yellow-400 rounded-xl shadow-lg hover:bg-yellow-300 transition-all drop-shadow-[0_0_15px_#facc15]"
                >
                  Get your pass ⚡
                </button>
              </motion.div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div
            className="flex h-full items-center justify-center text-white bg-gradient-to-r from-purple-700 to-pink-600"
            style={{
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="flex flex-col md:flex-row w-full max-w-6xl items-center justify-between px-4">
              {/* Left Side: Text */}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 2 }}
                className="text-center md:text-left"
              >
                <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-yellow-400 drop-shadow-[0_0_20px_#9a0094]">
                  Next Level Crypto Gaming Coming Soon!
                </h2>

                <p className="text-base sm:text-lg md:text-xl max-w-md mx-auto md:mx-0 font-bold text-gray-100 drop-shadow-[0_0_10px_#9a0094]">
                  Play and enjoy exciting rewards. Spin the wheel and grab your
                  chance to win big prizes today!
                </p>
              </motion.div>

              {/* Right Side: Image */}
              <motion.img
                src={imgCoin}
                alt="Crypto Coin"
                className="w-40 sm:w-64 md:w-[400px] lg:w-[600px] h-auto mx-auto md:mx-0 object-contain"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 2 }}
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>

      {/* Home Section */}

      {/*      <div className="home-container ">
        <h1 className="title">🎡 Fortune Wheel Game</h1>
        <p className="subtitle">Spin the wheel and win exciting rewards!</p>
        <Link to="/spin" className="btn">
          Start Game
        </Link>
      </div> */}

      {/* Games Section */}
      <Games />

      {/* About Section */}
      <About />

      {/* FAQ Section */}
      <Faq />

      {/* Blog Section */}
      <Blog />

      {/* Testimonials Section 
      <Testimonials />*/}

      {/* Stats Section */}
      <Stats />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
