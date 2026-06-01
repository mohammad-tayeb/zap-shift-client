function Services() {
  const services = [
    {
      title: "Express & Standard Delivery",
      description:
        "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
    },
    {
      title: "Nationwide Delivery",
      description:
        "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 4–872 hours.",
    },
    {
      title: "Fulfillment Solution",
      description:
        "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
    },
    {
      title: "Cash on Home Delivery",
      description:
        "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
    },
    {
      title: "Corporate Service / Contract In Logistics",
      description:
        "Customized corporate services which includes warehouse and inventory management support.",
    },
    {
      title: "Parcel Return",
      description:
        "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
    },
  ];

  return (
    <section className="bg-[#023336] max-w-6xl mx-auto rounded-4xl py-16 px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center font-sans">
      <div className="max-w-6xl w-full text-center mb-12">
        <h2 className="text-white text-3xl sm:text-4xl font-bold tracking-wide mb-4">
          Our Services
        </h2>
        <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>
      </div>

      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="rounded-3xl p-8 flex flex-col items-center text-center shadow-lg transition-all duration-300 hover:scale-[1.03] bg-white text-[#023336] hover:bg-[#baff57]"
          >
            {/* Icon Placeholder */}
            <div className="w-16 h-16 rounded-full bg-linear-to-tr from-rose-200 to-teal-100 flex items-center justify-center mb-6 relative shadow-inner">
              <div className="w-8 h-8 rounded-full bg-rose-400 opacity-80 animate-pulse flex items-center justify-center">
                <span className="text-[10px] text-white font-bold">📦</span>
              </div>
            </div>

            <h3 className="text-xl font-bold mb-4 min-h-14 flex items-center justify-center">
              {service.title}
            </h3>

            <p className="text-sm leading-relaxed text-gray-600 hover:text-[#023336]">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;