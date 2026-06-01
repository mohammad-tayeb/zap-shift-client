import image from '../../../assets/bookingIcon.png'
function HowItWorks() {
  // Data array to keep the code clean and scalable
  const services = [
    {
      title: "Booking Pick & Drop",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      title: "Cash On Delivery",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      title: "Delivery Hub",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      title: "Booking SME & Corporate",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
  ];
  return (
    <section className="bg-[#f0f4f4] py-16 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-[#003d3a] text-3xl md:text-4xl font-bold mb-10 tracking-tight">
          How it Works
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-4xl p-8 shadow-sm flex flex-col justify-center items-center min-h-80 transition-all duration-300 hover:shadow-md"
            >
              {/* Custom SVG Icon representing the Truck + Location Pin */}
              <img src={image} alt="" />

              {/* Card Content */}
              <h3 className="text-[#003d3a] text-md font-bold mb-4 leading-snug">
                {service.title}
              </h3>
              <p className="text-[#556967] text-base font-normal leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
