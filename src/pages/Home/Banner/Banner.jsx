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
  const banners = [banner1, banner2, banner3];

  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Pagination, Autoplay]}
      className="mySwiper z-0"
    >
      {banners.map((banner, index) => (
        <SwiperSlide key={index}>
          <div className="max-w-6xl mx-3 md:mx-auto my-4 md:my-8 bg-white rounded-2xl md:rounded-4xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="relative">
              <img
                src={banner}
                alt={`Banner ${index + 1}`}
                className="w-full h-auto object-cover"
              />

              {/* CTA Button */}
              <div className="absolute bottom-3 left-3 sm:bottom-6 sm:left-6 md:bottom-10 md:left-12">
                <button className="flex items-center gap-2 border-2 border-white bg-[#C5E763] hover:bg-[#b5d854] text-[#0F2D37] font-semibold px-3 py-2 sm:px-5 sm:py-3 md:px-6 md:py-3 rounded-full transition-all duration-200 group text-[10px] sm:text-sm md:text-base">
                  <span>Track Your Parcel</span>

                  <div className="bg-[#0F2D37] text-white rounded-full flex items-center justify-center w-5 h-5 sm:w-7 sm:h-7 transition-transform group-hover:scale-105">
                    <svg
                      className="w-3 h-3 rotate-45"
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
      ))}
    </Swiper>
  );
}

export default Banner;