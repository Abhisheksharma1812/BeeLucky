import React, { useState } from "react";

const faqs = [
  {
    question: "How does the Mines Game work?",
    answer:
      "You click tiles to uncover safe spots. Each safe spot increases your reward, but hitting a mine ends the game instantly.",
  },
  {
    question: "Where to gaming with crypto?",
    answer: "Most gaming sites do not accept crypto as a form of payment but we do.",
  },
  {
    question: "Are these games based on luck or skill?",
    answer: "Spin Wheel & Dice are mostly luck-based, while Mines requires a mix of strategy and risk management.",
  },
  {
    question: "Can I play these games on mobile?",
    answer: "Yes! All our games are mobile-friendly and responsive, so you can enjoy them anywhere.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq"  className="text-white relative    py-12 px-6 md:px-20">
      {/* Responsive grid: 1 col on mobile, 2 cols on md+ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
        {/* Left Side: Title */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
            Frequently Asked Questions
          </h1>
        </div>

        {/* Right Side: FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-700 pb-4 cursor-pointer"
            >
              <div
                className="flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-base sm:text-lg md:text-xl font-medium">
                  {faq.question}
                </h3>
                <span className="text-xl sm:text-2xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </div>

              {openIndex === index && (
                <p className="mt-2 text-gray-400 text-sm sm:text-base">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
