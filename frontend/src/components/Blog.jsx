export default function BlogSection() {
  const blogs = [
    {
      title: "Spin the Wheel: Test Your Luck & Win Big!",
      img: "/images/spinWin.png",
      date: "Sept 20, 2025",
      desc: "Looking for a quick burst of excitement? Our Spin Wheel game gives you the thrill of instant rewards with just one click.",
    },
    {
      title: "Roll the Dice: A Classic Game with Endless Fun",
      img: "/images/rollDice.png",
      date: "Sept 18, 2025",
      desc: "Roll your way into surprise multipliers, double your wins, or risk it all for bigger payouts.",
    },
    {
      title: "Upcoming Game Releases",
      img: "/images/upComing.png",
      date: "Sept 15, 2025",
      desc: "From sci-fi shooters to fantasy quests, here’s a sneak peek into the hottest titles coming soon.",
    },
  ];

  return (
    <section  id="blog" className="bg-gray-950 text-white py-16 px-6 md:px-12 lg:px-20">
      <h2 className="text-4xl font-bold text-center mb-12">
        Latest <span className="text-pink-500">News & Reviews</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {blogs.map((blog, i) => (
          <div
            key={i}
            className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:scale-105 hover:shadow-pink-500/30 transition"
          >
            <img
              src={blog.img}
              alt={blog.title}
              className="w-full h-52 object-cover"
            />
            <div className="p-6">
              <p className="text-sm text-gray-400">{blog.date}</p>
              <h3 className="text-xl font-semibold mt-2">{blog.title}</h3>
              <p className="text-gray-300 mt-3">{blog.desc}</p>
              <a
                href="#"
                className="inline-block mt-4 text-pink-500 hover:underline font-semibold"
              >
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
