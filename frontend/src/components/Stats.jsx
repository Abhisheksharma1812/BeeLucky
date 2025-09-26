export default function CommunitySection() {
  const stats = [
    { number: "50K+", label: "Active Players" },
    { number: "120+", label: "Games Reviewed" },
    { number: "30+", label: "Tournaments Hosted" },
    { number: "10K+", label: "Community Members" },
  ];

  return (
    <section id="stats" className="bg-gradient-to-r  text-white py-16 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
        {stats.map((s, i) => (
          <div key={i} className="p-6 bg-black/30 rounded-2xl shadow-lg">
            <h3 className="text-3xl font-extrabold">{s.number}</h3>
            <p className="text-gray-200">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
