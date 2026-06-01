
function WeHelped() {
  const logos = [
  {
    name: "Casio",
    url: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/casio.svg",
    alt: "Casio logo",
  },
  {
    name: "Amazon",
    url: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/amazon.svg",
    alt: "Amazon logo",
  },
  {
    name: "Moonstar",
    url: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/moonrepo.svg",
    alt: "Moonstar logo",
  },
  {
    name: "Star+",
    url: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/starship.svg",
    alt: "Star+ logo",
  },
  {
    name: "Start People",
    url: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/startrek.svg",
    alt: "Start People logo",
  },
  {
    name: "Randstad",
    url: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/randstad.svg",
    alt: "Randstad logo",
  },
];
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 font-sans mt-10">
      <div className="max-w-7xl mx-auto text-center mb-10">
        {/* Section Heading */}
        <h2 className="text-xl sm:text-2xl font-bold text-[#053A3F] mb-10 tracking-tight">
          We've helped thousands of sales teams
        </h2>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-90">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center justify-center h-12 w-full max-w-35 transition-all duration-300 hover:scale-105"
            >
              <img
                src={logo.url}
                alt={logo.alt}
                className="max-h-full max-w-full object-contain filter contrast-125 saturate-100"
                // Simple error fallback if remote URLs are blocked/changed
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "block";
                }}
              />
              {/* Fallback Text if image fails to load */}
              <span className="hidden font-semibold text-lg text-gray-600 tracking-wide uppercase">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
      <hr className="border-t-2 border-dotted border-gray-400 mt-16 max-w-6xl mx-auto" />
    </section>
  );
}

export default WeHelped;
