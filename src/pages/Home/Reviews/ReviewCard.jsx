import { BsQuote } from "react-icons/bs";

// receive data from Review.jsx and distructure.turn the main funtion into arrow funtion
const ReviewCard = ({ review }) => {
  const { userName, user_photoURL,user_review } = review;
// receive data from Review.jsx and distructure

  return (
    <div className="flex mySwiper reviewSwiper items-center justify-center bg-gray-100 p-4">
      <div className="max-w-xl w-100 bg-[#F8F9FA] rounded-4xl p-8 shadow-sm border border-gray-100/50">
        {/* Quote Icon */}
        <div className="mb-4">
          <BsQuote
            className="w-12 h-12 text-[#B4E3E3] transform rotate-180 fill-current"
            strokeWidth={1}
          />
        </div>

        {/* Testimonial Text */}
        <p className="text-[#4A4A4A] text-lg md:text-md leading-relaxed font-normal tracking-wide">
          {user_review}
        </p>

        {/* Dashed Separator */}
        <div className="my-8 border-t-2 border-dashed border-[#104F55]/20" />

        <div className="flex items-center gap-4">
          <img
            src={user_photoURL}
            alt="user"
            className="w-16 h-16 rounded-full object-cover shrink-0"
          />

          {/* Name and Title */}
          <div>
            <h4 className="text-[#07484E] font-bold text-xl md:text-1xl tracking-tight">
              {userName}
            </h4>
            <p className="text-[#6C757D] text-base md:text-sm mt-0.5">
              Senior Product Designer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
