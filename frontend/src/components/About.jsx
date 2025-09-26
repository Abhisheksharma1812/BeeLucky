import React from "react";

export default function AboutSection() {
  return (
    <section id="about" className="position-relative bg-gradient-to-r from-purple-700 via-indigo-800 to-black text-white py-16 px-6 md:px-12 lg:px-20">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-[url('/images/game-bg.jpg')] bg-cover bg-center opacity-20"></div>
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        
        {/* Title */}
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
          Level Up Your <span className="text-pink-500">Gaming</span> Experience
        </h2>

        {/* Intro */}
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10">
          Welcome to <span className="text-pink-400 font-semibold">GameVerse</span> – your ultimate hub 
          for the latest reviews, esports news, and gaming community fun. 
          From epic RPGs to intense shooters, we’ve got it all.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="p-6 bg-gray-900/50 rounded-2xl shadow-lg hover:scale-105 transition">
            🎮 <h3 className="text-xl font-semibold mt-2">Latest Reviews</h3>
            <p className="text-gray-400 text-sm mt-2">Stay ahead with honest reviews of trending games.</p>
          </div>
          <div className="p-6 bg-gray-900/50 rounded-2xl shadow-lg hover:scale-105 transition">
            🚀 <h3 className="text-xl font-semibold mt-2">Upcoming Releases</h3>
            <p className="text-gray-400 text-sm mt-2">Get the inside scoop on the hottest upcoming titles.</p>
          </div>
          <div className="p-6 bg-gray-900/50 rounded-2xl shadow-lg hover:scale-105 transition">
            🏆 <h3 className="text-xl font-semibold mt-2">Esports Action</h3>
            <p className="text-gray-400 text-sm mt-2">Catch up with tournaments, players, and highlights.</p>
          </div>
          <div className="p-6 bg-gray-900/50 rounded-2xl shadow-lg hover:scale-105 transition">
            🤝 <h3 className="text-xl font-semibold mt-2">Community</h3>
            <p className="text-gray-400 text-sm mt-2">Connect with gamers worldwide & share your journey.</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12">
          <a
            href="#contact"
            className="px-8 py-4 text-lg font-bold rounded-full bg-pink-600 hover:bg-pink-500 shadow-lg hover:shadow-pink-500/50 transition"
          >
            Join the Community
          </a>
        </div>
      </div>
    </section>
  );
}
