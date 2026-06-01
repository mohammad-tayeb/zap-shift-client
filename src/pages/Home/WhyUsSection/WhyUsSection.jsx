import banner1 from "../../../assets/live-tracking.png";
import banner2 from "../../../assets/safe-delivery.png";
import banner3 from "../../../assets/safe-delivery.png";
function WhyUsSection() {
  const features = [
    {
      title: "Live Parcel Tracking",
      description:
        "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
      // Replace this SVG with your <img src="path_to_png" alt="..." /> if preferred
      icon: <img src={banner1}></img>,
    },
    {
      title: "100% Safe Delivery",
      description:
        "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
      icon: <img src={banner2}></img>,
    },
    {
      title: "24/7 Call Center Support",
      description:
        "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
      icon: <img src={banner3}></img>,
    },
  ];
  return (
  <div>
      <div className="w-full max-w-5xl mx-auto p-6 space-y-6 bg-gray-100 flex flex-col justify-center">
      {features.map((feature, index) => (
        <div
          key={index}
          className="bg-white rounded-3xl p-8 shadow-sm flex flex-col md:flex-row items-center md:items-stretch gap-8 transition-all hover:shadow-md"
        >
          {/* Graphic Area */}
          <div className="w-full md:w-1/4 flex items-center justify-center min-h-30">
            {feature.icon}
          </div>

          {/* Dotted Divider Line */}
          <div className="hidden md:block w-px border-l-2 border-dotted border-gray-300 my-2" />

          {/* Content Area */}
          <div className="w-full md:w-3/4 flex flex-col justify-center text-center md:text-left">
            <h3 className="text-xl font-bold text-teal-950 mb-3 tracking-wide">
              {feature.title}
            </h3>
            <p className="text-sm md:text-base text-gray-500 leading-relaxed font-light">
              {feature.description}
            </p>
          </div>
        </div>
      ))}
    </div>
     <hr className="border-t-2 border-dotted border-gray-400 mt-16 max-w-6xl mx-auto mb-10" />
  </div>
  );
}

export default WhyUsSection;
