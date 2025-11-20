export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Alex Hunter",
      role: "Pro Gamer",
      img: "/images/user1.jpg",
      review:
        "This platform has completely changed how I connect with other gamers. The tournaments are top-notch!",
      rating: 5,
    },
    {
      name: "Maya Lopez",
      role: "Streamer",
      img: "/images/user2.jpg",
      review:
        "The community is so active and supportive. I found new friends and amazing games to play every week.",
      rating: 4,
    },
    {
      name: "Chris Johnson",
      role: "Casual Player",
      img: "/images/user3.jpg",
      review:
        "I love the design and features! Easy to find games and join events. Highly recommended!",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="bg-black text-white py-16 px-6  position-relative  md:px-12 lg:px-20">
      <h2 className="text-4xl font-bold text-center mb-12">
        What Gamers <span className="text-pink-500">Say</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-pink-500/30 hover:scale-105 transition"
          >
            <div className="flex items-center gap-4">
              <img
                src={t.img}
                alt={t.name}
                className="w-14 h-14 rounded-full border-2 border-pink-500"
              />
              <div>
                <h3 className="text-lg font-semibold">{t.name}</h3>
                <p className="text-gray-400 text-sm">{t.role}</p>
              </div>
            </div>
            <p className="mt-4 text-gray-300">{t.review}</p>
            <div className="flex mt-3">
              {Array.from({ length: 5 }).map((_, star) => (
                <span
                  key={star}
                  className={`text-yellow-400 ${
                    star < t.rating ? "opacity-100" : "opacity-30"
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
