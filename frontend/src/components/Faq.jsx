import React, { useState } from "react";

const faqs = [
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    question: "How do you make holy water?",
    answer: "You boil the hell out of it.",
  },
  {
    question: "What do you call someone with no body and no nose?",
    answer: "Nobody knows.",
  },
  {
    question: "Why can't you hear a pterodactyl go to the bathroom?",
    answer: "Because the 'P' is silent.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="text-white py-12 px-6 md:px-20">
<div class="grid grid-cols-2 gap-4">
        <div className=" mx-auto text-center">
      <h1 className="text-6xl font-bold mb-8">Frequently Asked Questions</h1>
        </div>


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
              <h3 className="text-lg font-medium">{faq.question}</h3>
              <span className="text-2xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </div>

            {openIndex === index && (
              <p className="mt-2 text-gray-400">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>

      </div>
    </section>
  );
}
