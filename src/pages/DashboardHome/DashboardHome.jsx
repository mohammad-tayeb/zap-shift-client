function DashboardHome() {
  // Mock data for the KPI cards
  const cards = [
    { label: "To Pay", count: "129" },
    { label: "Ready Pick UP", count: "1,325" },
    { label: "In Transit", count: "50" },
    { label: "Ready to Deliver", count: "50" },
    { label: "Delivered", count: "50" },
  ];
  return (
    <div className="min-h-screen bg-[#F0F2F5] p-6 font-sans text-[#1A1D1F]">
      {/* Top Header Section */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            Dashboard Overview
          </h1>
          <p className="text-sm text-[#6F767E] mt-1">
            You can access all your data and information from anywhere.
          </p>
        </div>
        <button className="flex items-center justify-center gap-2 bg-[#D1F266] hover:bg-[#c2e257] text-[#1A1D1F] font-semibold px-5 py-3 rounded-xl transition-colors shadow-sm self-start sm:self-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          Add Parcel
        </button>
      </div>

      {/* KPI Grid Section */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5 mb-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white p-5 rounded-2xl flex items-center gap-4 shadow-sm border border-[#EFEFEF]"
          >
            {/* Generic Ship/Parcel Icon Wrapper */}
            <div className="w-12 h-12 rounded-full border border-[#EDEDED] bg-[#F9F9F9] flex items-center justify-center shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#6F767E"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124l-.208-3.33a2.985 2.985 0 0 0-1.879-2.614M15 18.75V15a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 15v3.75m16.5-4.125V10.5A3.375 3.375 0 0 0 17.625 7.125H3.375A3.375 3.375 0 0 0 0 10.5v4.125"
                />
              </svg>
            </div>
            <div>
              <span className="text-xs font-medium text-[#6F767E] block mb-0.5 whitespace-nowrap">
                {card.label}
              </span>
              <span className="text-2xl font-bold tracking-tight text-[#1A1D1F]">
                {card.count}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Statistics Section */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#EFEFEF]">
        {/* Statistics Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-lg font-bold text-[#1A1D1F]">
            Overall Statistics
          </h2>
          <div className="flex items-center gap-2">
            {/* Dropdown Selector */}
            <button className="flex items-center gap-2 px-4 py-2 border border-[#EFEFEF] rounded-xl text-sm font-medium text-[#1A1D1F] hover:bg-gray-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 text-[#6F767E]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                />
              </svg>
              This Week
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-3 h-3 text-[#6F767E] ml-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>
            {/* Options Button */}
            <button className="p-2 border border-[#EFEFEF] rounded-xl hover:bg-gray-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 text-[#6F767E]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Chart Canvas Area */}
        <div className="relative border border-[#EFEFEF] rounded-xl p-6">
          <div className="flex h-64 w-full">
            {/* Y-Axis Grid Values */}
            <div className="flex flex-col justify-between text-xs font-medium text-[#9A9FA5] pr-4 select-none h-[88%]">
              <span>$25k</span>
              <span>$20k</span>
              <span>$15k</span>
              <span>$10k</span>
              <span>$5k</span>
              <span>$1k</span>
            </div>

            {/* Chart Grid Lines and Content Container */}
            <div className="relative flex-1 h-[88%]">
              {/* Absolute Background Grid Lines */}
              <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="w-full border-b border-dashed border-[#EFEFEF]"
                  ></div>
                ))}
              </div>

              {/* Absolute Vertical Separator Lines */}
              <div className="absolute inset-0 flex justify-between pointer-events-none px-[4%]">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className={`h-full border-r border-dashed ${i === 3 ? "border-[#82C43C]" : "border-[#EFEFEF]"}`}
                  ></div>
                ))}
              </div>

              {/* SVG Area Chart Representation */}
              <div className="absolute inset-0 z-10 px-[4%]">
                <svg
                  className="w-full h-full overflow-visible"
                  viewBox="0 0 700 200"
                  preserveAspectRatio="none"
                >
                  <defs>
                    {/* Linear Gradient matching the image */}
                    <linearGradient
                      id="chartGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="0%" stopColor="#D1F266" stopOpacity="0.4" />
                      <stop
                        offset="100%"
                        stopColor="#D1F266"
                        stopOpacity="0.0"
                      />
                    </linearGradient>
                  </defs>

                  {/* Filled Area path */}
                  <path
                    d="M 0 110 
                       C 40 110, 60 60, 100 60 
                       L 160 60 
                       C 200 60, 230 140, 270 140
                       L 300 140
                       C 330 140, 340 170, 360 170
                       L 390 170
                       C 420 170, 450 110, 490 110
                       L 530 110
                       C 560 110, 580 140, 610 140
                       L 630 140
                       C 650 140, 660 30, 680 30
                       L 710 30
                       C 730 30, 750 140, 770 140
                       L 800 140
                       L 800 200 L 0 200 Z"
                    fill="url(#chartGradient)"
                  />

                  {/* Top Line path */}
                  <path
                    d="M 0 110 
                       C 40 110, 60 60, 100 60 
                       L 160 60 
                       C 200 60, 230 140, 270 140
                       L 300 140
                       C 330 140, 340 170, 360 170
                       L 390 170
                       C 420 170, 450 110, 490 110
                       L 530 110
                       C 560 110, 580 140, 610 140
                       L 630 140
                       C 650 140, 660 30, 680 30
                       L 710 30
                       C 730 30, 750 140, 770 140
                       L 800 140"
                    fill="none"
                    stroke="#A3D636"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              {/* Exact Hover Tooltip Instance Placement (Thu Context) */}
              <div className="absolute left-[47%] top-[30%] transform -translate-x-1/2 z-20 shadow-xl border border-[#EFEFEF] rounded-2xl bg-white p-3 min-w-30">
                <div className="text-[10px] font-medium text-[#9A9FA5] mb-0.5">
                  Sun, Jul 13, 2025
                </div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#1A1D1F]">
                  <span className="w-2 h-2 rounded-full bg-[#A3D636]"></span>
                  $15210.00
                </div>
              </div>
            </div>
          </div>

          {/* X-Axis Days Labels */}
          <div className="flex justify-between text-xs font-medium text-[#9A9FA5] mt-2 pl-12 pr-[3%] select-none">
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
            <span>Sat</span>
            <span>Sun</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardHome;
