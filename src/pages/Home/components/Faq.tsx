import React, { useState } from "react";

const Faq: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What do you mean by public-facing usage?",
      answer:
        "We define public-facing usage as leveraging CARTO to power enterprise-scale applications that are made available to external parties such as clients or the public, as opposed to internal demonstration-only applications.",
    },
    {
      question: "Can I buy more storage for my individual plan?",
      answer: "Yes, you can buy more storage based on your needs.",
    },
    {
      question:
        "What happens to my data after the trial or if I cancel my subscription?",
      answer:
        "Your data will be preserved for a certain period before deletion.",
    },
    {
      question: "Can I cancel my monthly or annual subscription?",
      answer: "Yes, you can cancel your subscription at any time.",
    },
  ];

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto mb-36">
      <div className="flex mx-auto flex-col items-center mb-8">
        <h1 className="text-[35px] font-bold mb-4">
          Frequently Asked Questions
        </h1>
      </div>
      <div className=" rounded-lg p-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200">
            <button
              onClick={() => toggleFaq(index)}
              className="w-full text-left flex justify-between items-center p-4 focus:outline-none"
            >
              <span
                className={`font-medium ${
                  activeIndex === index ? "text-blue-700" : "text-gray-900"
                }`}
              >
                {faq.question}
              </span>
              <span className="text-xl">
                {activeIndex === index ? "−" : "+"}
              </span>
            </button>
            {activeIndex === index && (
              <div className="p-4 text-gray-600">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <button className="rounded-full px-6 py-2 border border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white transition">
          Add Question
        </button>
      </div>
    </div>
  );
};

export default Faq;
