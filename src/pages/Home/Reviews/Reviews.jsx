import { use } from "react";
import image from "../../../assets/customer-top.png";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import ReviewCard from "./ReviewCard";
import { Swiper, SwiperSlide } from "swiper/react";

// load data from json file
const Reviews = ({ reviewsPromise }) => {
  const reviews = use(reviewsPromise);
  console.log(reviews);
  // load data from json file

  return (
    <div>
      <section className="bg-[#f0f2f2] py-16 px-4 text-center font-sans">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          {/* Illustration Container */}
          <div className="mb-6 w-full max-w-70 sm:max-w-[320px]">
            <img
              src={image}
              alt="Moving boxes and hand truck illustration"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Heading with typo correction (sayings -> saying) */}
          <h2 className="text-[28px] sm:text-[36px] font-bold text-[#093333] tracking-tight mb-4">
            What our customers are saying
          </h2>

          {/* Description Paragraph */}
          <p className="text-[#555555] text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
            Enhance posture, mobility, and well-being effortlessly with Posture
            Pro. Achieve proper alignment, reduce pain, and strengthen your body
            with ease!
          </p>
        </div>
      </section>

      <section className="mx-auto -mt-10 mb-10">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"2"}
          coverflowEffect={{
            rotate: 15,
            stretch: 0,
            depth: 60,
            modifier: 2,
            slideShadows: false,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {/* map all data and send data to a component to iterate */}
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <ReviewCard review={review}></ReviewCard>
            </SwiperSlide>
          ))}
          {/* map and send data to a component to show */}
        </Swiper>
      </section>
    </div>
  );
};

export default Reviews;
