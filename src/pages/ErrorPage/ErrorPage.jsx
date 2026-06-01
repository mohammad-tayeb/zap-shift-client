import { Link } from "react-router";

function ErrorPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 font-sans select-none">
      {/* Reconstructed Mascot Illustration Wrapper */}
      <div className="w-64 h-64 relative mb-6 flex items-center justify-center animate-fade-in">
        <svg
          viewBox="0 0 250 250"
          className="w-full h-full drop-shadow-[0_8px_16px_rgba(0,0,0,0.06)]"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Ground Shadow */}
          <ellipse cx="125" cy="215" rx="35" ry="8" fill="#E2E8F0" />

          {/* Left Arm */}
          <path
            d="M90 120 C75 125, 75 140, 85 142 C92 143, 93 130, 93 120 Z"
            fill="#F45C84"
            stroke="#1A1A1A"
            strokeWidth="4"
            strokeLinejoin="round"
          />

          {/* Right Arm */}
          <path
            d="M160 120 C170 125, 172 138, 168 145"
            fill="none"
            stroke="#1A1A1A"
            strokeWidth="4"
            strokeLinecap="round"
          />

          {/* Left Leg */}
          <path
            d="M105 185 C105 210, 118 210, 118 185"
            fill="#F45C84"
            stroke="#1A1A1A"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Right Leg */}
          <path
            d="M145 185 C145 210, 132 210, 132 185"
            fill="#F45C84"
            stroke="#1A1A1A"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Main Body (Pink Eraser-like Shape) */}
          <rect
            x="85"
            y="75"
            width="80"
            height="110"
            rx="24"
            fill="#F45C84"
            stroke="#1A1A1A"
            strokeWidth="4"
            strokeLinejoin="round"
          />

          {/* Body Highlights and Spots */}
          <path
            d="M97 87 L110 87"
            stroke="#FFF"
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.6"
          />
          <path
            d="M97 87 L97 120"
            stroke="#FFF"
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.6"
          />
          <circle cx="152" cy="112" r="3" fill="#D63A62" />
          <circle cx="148" cy="155" r="4" fill="#D63A62" />

          {/* Eyes */}
          {/* Left Eye */}
          <ellipse cx="106" cy="115" rx="6" ry="8" fill="#1A1A1A" />
          <circle cx="104" cy="112" r="2" fill="#FFF" />
          {/* Right Eye */}
          <ellipse cx="134" cy="113" rx="6" ry="8" fill="#1A1A1A" />
          <circle cx="132" cy="110" r="2" fill="#FFF" />
          {/* Eyebrows */}
          <path
            d="M98 104 C104 102, 110 105, 112 107"
            fill="none"
            stroke="#1A1A1A"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M128 106 C134 103, 140 102, 142 105"
            fill="none"
            stroke="#1A1A1A"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Scared/Open Mouth */}
          <path
            d="M110 145 C110 130, 132 130, 132 145 C132 155, 110 155, 110 145 Z"
            fill="#FFF"
            stroke="#1A1A1A"
            strokeWidth="4"
            strokeLinejoin="round"
          />
          {/* Teeth/Mouth Lines */}
          <path d="M111 142 L131 142" stroke="#1A1A1A" strokeWidth="2" />
          <path d="M115 142 L115 151" stroke="#CBD5E1" strokeWidth="2" />
          <path d="M121 142 L121 153" stroke="#CBD5E1" strokeWidth="2" />
          <path d="M127 142 L127 151" stroke="#CBD5E1" strokeWidth="2" />

          {/* Yellow Construction Hat */}
          <path
            d="M93 74 C93 45, 157 45, 157 74 Z"
            fill="#FABE28"
            stroke="#1A1A1A"
            strokeWidth="4"
            strokeLinejoin="round"
          />
          {/* Hat Brim */}
          <rect
            x="88"
            y="70"
            width="74"
            height="7"
            rx="3.5"
            fill="#FABE28"
            stroke="#1A1A1A"
            strokeWidth="4"
            strokeLinejoin="round"
          />
          {/* Hat Stripes/Details */}
          <path
            d="M112 49 C116 56, 116 66, 114 70"
            fill="none"
            stroke="#1A1A1A"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M125 46 L125 70"
            fill="none"
            stroke="#1A1A1A"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M138 49 C134 56, 134 66, 136 70"
            fill="none"
            stroke="#1A1A1A"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Wrench Tool */}
          <g transform="translate(152, 95) rotate(25)">
            {/* Wrench Shaft */}
            <rect
              x="8"
              y="25"
              width="14"
              height="55"
              rx="4"
              fill="#D1D5DB"
              stroke="#1A1A1A"
              strokeWidth="4"
              strokeLinejoin="round"
            />
            <rect x="12" y="35" width="6" height="35" rx="1" fill="#9CA3AF" />

            {/* Wrench Top Head */}
            <path
              d="M0 25 C-5 10, 15 -2, 26 8 C35 16, 32 32, 22 34"
              fill="#D1D5DB"
              stroke="#1A1A1A"
              strokeWidth="4"
              strokeLinecap="round"
            />
            {/* Wrench Inner Jaw Cutout */}
            <path
              d="M3 15 L15 6 L24 16 L15 23 Z"
              fill="#FFF"
              stroke="#1A1A1A"
              strokeWidth="4"
              strokeLinejoin="round"
            />

            {/* Wrench Bottom Gripper */}
            <circle
              cx="15"
              cy="80"
              r="10"
              fill="#D1D5DB"
              stroke="#1A1A1A"
              strokeWidth="4"
            />
            <circle
              cx="15"
              cy="80"
              r="4"
              fill="#FFF"
              stroke="#1A1A1A"
              strokeWidth="3"
            />
          </g>
        </svg>
      </div>

      {/* Error Message Header */}
      <h1 className="text-[40px] font-black text-[#1A1D1F] tracking-tight mb-8">
        Error 404
      </h1>

      {/* Navigation CTA Button */}
      <Link
        to="/"
        className="bg-[#D1F266] hover:bg-[#c3e459] text-[#1A1D1F] font-bold text-sm px-7 py-3 rounded-xl transition-all duration-200 transform active:scale-95 shadow-sm"
      >
        Go Home
      </Link>
    </div>
  );
}

export default ErrorPage;
