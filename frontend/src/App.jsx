import React from "react";

import { Routes, Route } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles.css";

import Login from './pages/Login'
import Register from './pages/Register'
import Spin from './pages/Spin'
import Pay from './pages/Payment'
import Home from './pages/home'



function App() {
  return (


    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/spin" element={<Spin />} />
       <Route path="/pay" element={<Pay />} />
    </Routes>

  );
}

export default App;
