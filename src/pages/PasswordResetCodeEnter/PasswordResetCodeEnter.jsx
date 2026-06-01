import { useRef } from "react";
import Logo from "../../components/logo/Logo";
import AuthBanner from "../../components/authBanner/AuthBanner";

function EnterCode() {
  // Create an array of references to hook onto each input element
  const inputRefs = useRef([]);

  const handleInputChange = (e, index) => {
    const val = e.target.value;

    // If the user entered a character and a next input field exists, shift focus right
    if (val.length === 1 && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    // Optional quality-of-life feature: If user presses Backspace and the field is empty, shift focus left
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row font-sans bg-white">
      {/* Left Side: Enter Code Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-8 sm:px-16 lg:px-24 xl:px-32 py-12">
        {/* Logo */}
        <Logo width="35px" textSize="text-1xl" marginStart="-ms-18"></Logo>

        {/* Header */}
        <div className="mb-8 mt-2">
          <h1 className="text-3xl font-extrabold text-slate-900 mb-2 tracking-tight">
            Enter Code
          </h1>
          <p className="text-sm font-medium text-slate-600 max-w-xs leading-relaxed">
            Enter 6 digit code that we sent in your email address
          </p>
        </div>

        {/* Form */}
        <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
          {/* 6 Digit Code Inputs Container */}
          <div className="flex items-center gap-2 sm:gap-3">
            {[...Array(6)].map((_, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                placeholder="6"
                ref={(el) => (inputRefs.current[index] = el)}
                onChange={(e) => handleInputChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="w-11 h-11 bg-white border border-slate-200 text-center font-semibold text-slate-700 rounded-md focus:outline-none focus:border-slate-400 placeholder:text-slate-300 text-sm"
                required
              />
            ))}
          </div>

          {/* Verify Code Button */}
          <button
            type="submit"
            className="btn w-full h-11 min-h-0 bg-primary hover:bg-[#c2db59] border-none text-slate-900 font-bold normal-case text-sm shadow-none rounded-md"
          >
            Verify Code
          </button>
        </form>
      </div>

      {/* Right Side: Split Illustration Panel */}
      <AuthBanner></AuthBanner>
    </div>
  );
}

export default EnterCode;
