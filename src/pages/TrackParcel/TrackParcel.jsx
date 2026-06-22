import { Search, CheckCircle2 } from "lucide-react";

function TrackParcel() {
  // Hardcoded tracking updates data array to keep the JSX clean
  const trackingUpdates = Array(7).fill({
    date: "Jun 02, 2025",
    time: "12:21 am",
    status: "Assigned to rider.",
  });
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6 antialiased font-sans">
      <div className="w-full max-w-7xl bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12">
        {/* Header Section */}
        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#003B31] tracking-tight">
            Track Your Consignment
          </h1>
          <p className="text-xs text-gray-400 mt-2 font-medium">
            Now you can easily track your consignment
          </p>
        </header>

        {/* Search Bar Section */}
        <div className="relative flex items-center max-w-xl mb-12">
          <div className="absolute left-4 text-gray-400">
            <Search className="w-4 h-4" />
          </div>
          <input
            type="text"
            placeholder="Search tracking code here"
            defaultValue="OIJWJVEXWZ9823Q7H5H55YV7"
            className="w-full bg-[#F0F2F5] text-xs font-medium text-gray-600 pl-11 pr-28 py-3.5 rounded-full focus:outline-none placeholder-gray-400"
          />
          <button className="absolute right-1.5 top-1.5 bottom-1.5 bg-[#C5E75D] hover:bg-[#b6d84c] text-xs font-bold text-[#003B31] px-7 rounded-full transition-colors">
            Search
          </button>
        </div>

        <hr className="border-gray-100 mb-10" />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left Column: Product Details */}
          <div className="bg-[#F0F2F5] rounded-3xl p-8 min-h-145 flex flex-col justify-between">
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-[#003B31] mb-6">
                Product details
              </h2>

              <div className="space-y-4 text-[13px] text-gray-600 font-medium">
                <p className="text-gray-400 text-xs">May 31, 2025 03:41 pm</p>
                <p>
                  <span className="text-gray-400">Id :</span> 148976175
                </p>
                <p>
                  <span className="text-gray-400">Invoice :</span> 24227
                </p>
                <p className="break-all">
                  <span className="text-gray-400">Tracking Code :</span>{" "}
                  OIJWJVEXWZ9823Q7H5H55YV7
                </p>

                <div className="pt-4 space-y-2">
                  <p>
                    <span className="text-gray-400">Name :</span> Zahid Hossain
                  </p>
                  <p className="leading-relaxed">
                    <span className="text-gray-400">Address :</span> Madrasha
                    Road, Chandpur sadar, Chandpur, Chandpur, 3600, BD
                  </p>
                  <p>
                    <span className="text-gray-400">Phone Number :</span>{" "}
                    01780448866
                  </p>
                </div>

                <div className="pt-6 space-y-2">
                  <p>
                    <span className="text-gray-400">Approved :</span> N/A
                  </p>
                  <p>
                    <span className="text-gray-400">Weight :</span> KG
                  </p>
                  <p>
                    <span className="text-gray-400">COD :</span> ৳ 0
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <span className="inline-block bg-amber-400/20 text-amber-600 text-xs font-bold px-4 py-1.5 rounded-md">
                Pending
              </span>
            </div>
          </div>

          {/* Right Column: Tracking Updates */}
          <div className="bg-[#F0F2F5] rounded-3xl p-8 min-h-145">
            <h2 className="text-xl md:text-2xl font-bold text-[#003B31] mb-8">
              Tracking Updates
            </h2>

            <div className="relative pl-4 space-y-6">
              {trackingUpdates.map((update, index) => (
                <div
                  key={index}
                  className="flex items-start relative gap-6 group"
                >
                  {/* Timeline Vertical Connector Line */}
                  {index !== trackingUpdates.length - 1 && (
                    <div className="absolute left-20.25 top-6 -bottom-6 w-0.5 bg-gray-200" />
                  )}

                  {/* Date & Time */}
                  <div className="w-15 shrink-0 text-left pt-0.5">
                    <p className="text-[11px] font-bold text-gray-600">
                      {update.date}
                    </p>
                    <p className="text-[10px] text-gray-400 mt-0.5">
                      {update.time}
                    </p>
                  </div>

                  {/* Checkmark Status Icon */}
                  <div className="relative z-10 bg-[#F0F2F5] p-0.5 rounded-full">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 fill-emerald-50" />
                  </div>

                  {/* Status Message */}
                  <div className="pt-0.5">
                    <p className="text-[13px] font-medium text-gray-700">
                      {update.status}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrackParcel;
