import boxpin from '../../../assets/location-merchant.png'
import wave from '../../../assets/be-a-merchant-bg.png'
function BecomeAMarchent() {
  return (
    <div className="w-full max-w-6xl mx-auto p-4 bg-[#f0f0f0]">
      {/* Main Banner Container */}
      <div className="relative overflow-hidden rounded-4xl bg-[#023436] px-8 py-12 md:px-16 md:py-16 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="absolute top-0 left-0 right-0 h-1/3 opacity-80 pointer-events-none">
          <img src={wave} alt="" />
        </div>

        {/* Left Content Column */}
        <div className="relative z-10 max-w-xl flex-1 text-white">
          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold leading-tight tracking-wide mb-4">
            Merchant and Customer Satisfaction is Our First Priority
          </h2>

          <p className="text-sm md:text-base text-gray-300 font-light leading-relaxed tracking-wide max-w-lg mb-8">
            We offer the lowest delivery charge with the highest value along
            with 100% safety of your product. Pathao courier delivers your
            parcels in every corner of Bangladesh right on time.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 items-center">
            <button className="bg-[#c2e86a] text-[#023436] font-semibold px-8 py-3.5 rounded-full hover:bg-[#b0d559] transition-colors duration-200 text-sm md:text-base">
              Become a Merchant
            </button>

            <button className="border border-[#c2e86a] text-[#c2e86a] font-medium px-8 py-3.5 rounded-full bg-transparent hover:bg-[#c2e86a]/10 transition-colors duration-200 text-sm md:text-base">
              Earn with ZapShift Courier
            </button>
          </div>
        </div>

        {/* Right Column: Graphic Elements Container */}
        <div className="relative z-10 flex-1 w-full max-w-md h-48 md:h-64 flex items-center justify-center">
        <img src={boxpin} alt="" />
        </div>
      </div>
    </div>
  );
}

export default BecomeAMarchent;
