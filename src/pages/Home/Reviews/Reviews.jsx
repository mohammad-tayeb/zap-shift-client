import { use } from "react";
import image from "../../../assets/customer-top.png";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper/modules";
import ReviewCard from "./ReviewCard";
import { Swiper, SwiperSlide } from "swiper/react";

const Reviews = ({ reviewsPromise }) => {
  const reviews = use(reviewsPromise);

  return (
    <div className="w-full overflow-hidden">
      {/* HEADER SECTION */}
      <section className="bg-[#f0f2f2] py-10 md:py-16 px-4 text-center font-sans">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <div className="mb-6 w-full max-w-[180px] sm:max-w-[250px] md:max-w-[320px]">
            <img
              src={image}
              alt="Customer illustration"
              className="w-full h-auto object-contain"
            />
          </div>

          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-[#093333] mb-4">
            What our customers are saying
          </h2>

          <p className="text-[#555555] text-sm sm:text-base leading-relaxed max-w-2xl">
            Enhance posture, mobility, and well-being effortlessly with Posture
            Pro. Achieve proper alignment, reduce pain, and strengthen your body
            with ease!
          </p>
        </div>
      </section>

      {/* SWIPER SECTION */}
      <section className="max-w-7xl mx-auto px-4 -mt-6 md:-mt-10 mb-10">
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          coverflowEffect={{
            rotate: 15,
            stretch: 0,
            depth: 80,
            modifier: 2,
            slideShadows: false,
            scale: 0.95,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 2.5,
            },
            1280: {
              slidesPerView: 3,
            },
          }}
          modules={[EffectCoverflow, Pagination]}
          className="py-6"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="flex justify-center">
                <ReviewCard review={review} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default Reviews;