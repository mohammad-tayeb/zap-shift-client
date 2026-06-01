import { useState } from "react";

function AboutUs() {
  // State to manage the active tab
  const [activeTab, setActiveTab] = useState("Story");

  // Nav items array
  const tabs = ["Story", "Mission", "Success", "Team & Others"];

  // Content map for different tabs (replicated text from image)
  const tabContent = {
    Story: [
      "We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether it's a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time.",
      "We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether it's a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time.",
      "We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether it's a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time.",
    ],
    Mission: [
      "Our mission is to revolutionize logistics through transparency and cutting-edge routing algorithms. We aim to support businesses of all scales by minimizing delay overheads and ensuring pristine item care.",
      "We hold ourselves to a standard where every route is optimized and every client receives absolute clarity on their shipments, building long-term operational trusts.",
    ],
    Success: [
      "With over millions of successful drop-offs completed worldwide, our metrics speak for our infrastructure. Innovation and dedication to ground-level operations have consistently put us ahead as an industry benchmark.",
    ],
    "Team & Others": [
      "Behind our fleet is a dedicated core team of developers, data analysts, customer care specialists, and logistics coordinators working round-the-clock to manage operations flawlessly.",
    ],
  };
  return (
    <div className="bg-[#F0F2F5] p-6 flex items-center justify-center font-sans">
      {/* Container Box */}
      <div className="w-full max-w-6xl bg-white rounded-4xl p-8 md:p-14 shadow-sm">
        {/* Header Section */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-[#0D3B3F] tracking-tight mb-4">
            About Us
          </h1>
          <p className="text-sm md:text-base text-[#6F767E] max-w-2xl leading-relaxed">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to business shipments — we
            deliver on time, every time.
          </p>
        </div>

        {/* Divider Line */}
        <hr className="border-[#EFEFEF] mb-8" />

        {/* Interactive Tab Navigation */}
        <div className="flex flex-wrap gap-x-8 gap-y-3 mb-8 border-b border-transparent">
          {tabs.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-xl font-medium tracking-tight transition-all duration-200 outline-none select-none pb-1 ${
                  isActive
                    ? "text-[#65823D] font-bold border-b-2 border-[#65823D]"
                    : "text-[#9A9FA5] hover:text-[#6F767E]"
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Dynamic Text Content Display Area */}
        <div className="space-y-6 transition-all duration-300 ease-in-out">
          {tabContent[activeTab].map((paragraph, index) => (
            <p
              key={index}
              className="text-sm md:text-base text-[#6F767E] leading-relaxed tracking-wide font-normal"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
