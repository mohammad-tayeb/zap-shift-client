function FAQ() {
  const faqData = [
    {
      id: 1,
      question: "How long does shipping usually take?",
      answer:
        "Shipping times depend on the destination and delivery method selected. Standard shipping usually takes 5–10 business days, while express shipping can arrive within 2–5 business days.",
      defaultOpen: true,
    },
    {
      id: 2,
      question: "Do you offer international shipping?",
      answer:
        "Yes, we provide international shipping services to multiple countries worldwide. Delivery times and shipping charges may vary depending on the destination.",
      defaultOpen: false,
    },
    {
      id: 3,
      question: "How can I track my shipment?",
      answer:
        "Once your order is shipped, you will receive a tracking number via email or SMS. You can use this number on our tracking page to monitor your shipment in real time.",
      defaultOpen: false,
    },
    {
      id: 4,
      question: "What should I do if my package is delayed?",
      answer:
        "If your shipment is delayed beyond the estimated delivery time, please contact our support team with your tracking number. We will investigate and provide an update as quickly as possible.",
      defaultOpen: false,
    },
    {
      id: 5,
      question: "Are my packages insured during transit?",
      answer:
        "Yes, all shipments are handled with care and include basic transit protection. Additional insurance options are also available for high-value packages.",
      defaultOpen: false,
    },
  ];
  return (
    <div className="bg-[#F0F4F4] flex flex-col items-center justify-center py-16 px-4 font-sans selection:bg-[#CCEC60]">
      <div className="max-w-4xl w-full text-center mb-10">
        {/* Main Title */}
        <h2 className="text-[2.5rem] font-bold text-[#083A3A] mb-4 tracking-tight">
          Frequently Asked Question (FAQ)
        </h2>
        {/* Subtitle Description */}
        <p className="text-[#64748B] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>
      </div>

      {/* Accordion Container */}
      <div className="w-full max-w-4xl space-y-4">
        {faqData.map((faq) => (
          <div
            key={faq.id}
            className={`collapse collapse-arrow border bg-white rounded-xl transition-all duration-300 ${
              faq.defaultOpen
                ? "border-[#49A3A3] bg-[#F2FAFA]"
                : "border-transparent shadow-sm hover:shadow-md"
            }`}
          >
            {/* The hidden input makes DaisyUI accordions interactive */}
            <input
              type="checkbox"
              name="faq-accordion"
              defaultChecked={faq.defaultOpen}
              className="peer"
            />

            {/* Question Title */}
            <div className="collapse-title text-base md:text-lg font-bold text-[#083A3A] py-5 px-6 peer-checked:text-[#083A3A]">
              {faq.question}
            </div>

            {/* Answer Content */}
            <div className="collapse-content px-6 text-[#475569] leading-relaxed text-sm md:text-base">
              <p className="pb-4">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>

      {/* See More Button */}
      <div className="mt-10">
        <button className="btn border-none bg-[#CCEC60] hover:bg-[#b8d650] text-[#083A3A] font-bold text-base px-6 h-14 rounded-full shadow-sm normal-case flex items-center gap-3 transition-transform active:scale-95 group">
          See More FAQ's
          <div className="w-10 h-10 bg-[#1C1F1E] rounded-full flex items-center justify-center text-white transition-transform group-hover:rotate-45">
            {/* Arrow Up Right SVG Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
}

export default FAQ;
