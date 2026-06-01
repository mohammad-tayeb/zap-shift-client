// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import banner1 from "../../../assets/banner/banner1.png";
import banner2 from "../../../assets/banner/banner2.png";
import banner3 from "../../../assets/banner/banner3.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";

function Banner() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="max-w-6xl mx-auto my-8 bg-white rounded-4xl border border-gray-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8 font-sans">
            <div className="relative">
              {/* Left Content Column */}
              <img src={banner1} alt="" />
              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2 absolute bottom-12 left-18">
                {/* Track Your Parcel Button */}
                <button className="flex border-2 border-white items-center gap-3 bg-[#C5E763] hover:bg-[#b5d854] text-[#0F2D37] font-semibold px-6 py-3 rounded-full transition-all duration-200 group">
                  <span>Track Your Parcel</span>
                  <div className="bg-[#0F2D37] text-white p-2 rounded-full flex items-center justify-center w-7 h-7 group-hover:scale-105 transition-transform">
                    {/* REPLACE: Replace with an actual Arrow Icon if needed */}
                    <svg
                      className="w-3 h-3 transform rotate-45"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
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
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="max-w-6xl mx-auto my-8 bg-white rounded-4xl border border-gray-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8 font-sans">
            <div className="relative">
              {/* Left Content Column */}
              <img src={banner2} alt="" />
              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2 absolute bottom-12 left-18">
                {/* Track Your Parcel Button */}
                <button className="flex border-2 border-white  items-center gap-3 bg-[#C5E763] hover:bg-[#b5d854] text-[#0F2D37] font-semibold px-6 py-3 rounded-full transition-all duration-200 group">
                  <span>Track Your Parcel</span>
                  <div className="bg-[#0F2D37] text-white p-2 rounded-full flex items-center justify-center w-7 h-7 group-hover:scale-105 transition-transform">
                    {/* REPLACE: Replace with an actual Arrow Icon if needed */}
                    <svg
                      className="w-3 h-3 transform rotate-45"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
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
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="max-w-6xl mx-auto my-8 bg-white rounded-4xl border border-gray-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8 font-sans">
            <div className="relative">
              {/* Left Content Column */}
              <img src={banner3} alt="" />
              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2 absolute bottom-12 left-18">
                {/* Track Your Parcel Button */}
                <button className="flex border-2 border-white  items-center gap-3 bg-[#C5E763] hover:bg-[#b5d854] text-[#0F2D37] font-semibold px-6 py-3 rounded-full transition-all duration-200 group">
                  <span>Track Your Parcel</span>
                  <div className="bg-[#0F2D37] text-white p-2 rounded-full flex items-center justify-center w-7 h-7 group-hover:scale-105 transition-transform">
                    {/* REPLACE: Replace with an actual Arrow Icon if needed */}
                    <svg
                      className="w-3 h-3 transform rotate-45"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
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
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Banner;
