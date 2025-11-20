import { motion } from "framer-motion";
export default function Games() {
  const games = [
    { title: "Spin Wheel", href: "/spin", img: "/images/wheel-logo.png" },
    { title: "", href: "#", img: "/images/dice.png" },
    { title: "", href: "#", img: "/images/coin-flip.png" },
    { title: "", href: "#", img: "/images/mine.png" },
    { title: "", href: "#", img: "/images/limbo.png" },
  ];

    return (  
  <div id="games" className="relative from-black-700 via-indigo-800 to-black-700  mt-10 p-8 min-h-screen text-white">
    <h2 className="text-2xl text-white text-center font-bold mb-4">
      Easy way for crypto Play{" "}
    </h2>
    <h1 className="text-7xl text-yellow-400 text-center font-bold mb-4">
      Popular Games
    </h1>
    <h4 className="text-lg text-gray-400  text-center font-bold mb-2">
      Unparalleled slots to give lovers of the gambling world an exciting gaming{" "}
    </h4>
    <h4 className="text-lg text-gray-400  text-center font-bold mb-4">
      {" "}
      experience par excellence
    </h4>
    {/* Game Options */}{" "}
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-1 p-4 px-10 pb-10">
      {games.map((game, index) => (
        <motion.div
          key={index} // ✅ Added unique key
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="relative group bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-10
        text-center cursor-pointer overflow-hidden"
          style={{
            backgroundImage: `url(${game.img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "300px",
            width: "200px",
          }}
        >
          {/* Clickable area */}
          <a
            href={game.href}
            className="absolute inset-0 z-10"
            aria-label={game.title}
          />

          {game.title !== "Spin Wheel" && (
            <div
              className="absolute inset-0 flex items-center justify-center bg-black/70
              text-white text-2xl font-bold opacity-0 group-hover:opacity-100 transition"
            >
              Coming Soon!{" "}
            </div>
          )}
        </motion.div>
      ))}
    </section>
  </div>
  );
}
