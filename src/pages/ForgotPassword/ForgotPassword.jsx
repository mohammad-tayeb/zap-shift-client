import { Link } from "react-router";
import image from "../../assets/authImage.png";
import Logo from "../../components/logo/Logo";

function ForgotPassword() {
  return (
    <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row font-sans bg-white">
      {/* Left Side: Forgot Password Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-8 sm:px-16 lg:px-24 xl:px-32 py-12">
        {/* Logo */}
        <Logo width="35px" textSize="text-1xl" marginStart="-ms-18"></Logo>

        {/* Header */}
        <div className="mb-8 mt-2">
          <h1 className="text-3xl font-extrabold text-slate-900 mb-2 tracking-tight">
            Forgot Password
          </h1>
          <p className="text-sm font-medium text-slate-600 max-w-xs leading-relaxed">
            Enter your email address and we'll send you a reset link.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
          {/* Email Input */}
          <div className="form-control w-full">
            <label className="label py-1">
              <span className="label-text font-semibold text-xs text-slate-700">
                Email
              </span>
            </label>
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full h-11 bg-white border-slate-200 text-sm focus:outline-none focus:border-slate-400 placeholder:text-slate-300"
              required
            />
          </div>

          {/* Send Button */}
          <Link
          to="/passwordResetCodeEnter"
            type="submit"
            className="btn w-full h-11 min-h-0 bg-primary hover:bg-[#c2db59] border-none text-slate-900 font-bold normal-case text-sm shadow-none rounded-md mt-2"
          >
            Send
          </Link>
        </form>

        {/* Back to Login Link */}
        <div className="mt-6 text-left">
          <p className="text-xs font-semibold text-slate-400">
            Remember your password?{" "}
            <Link to="/login" className="text-[#A2C13B] hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>

      {/* Right Side: Split Illustration Panel */}
      <div className="hidden md:flex w-1/2 bg-[#F6FAF2] items-center justify-center p-12">
        <div className="max-w-md w-full aspect-square relative flex items-center justify-center">
          <img src={image} alt="auth image" />
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;