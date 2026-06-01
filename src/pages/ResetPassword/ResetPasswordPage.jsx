import { useForm } from "react-hook-form";
import AuthBanner from "../../components/authBanner/AuthBanner";
import Logo from "../../components/logo/Logo";

function ResetPasswordPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const password = watch("newPassword");

  return (
    <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row font-sans bg-white">
      {/* Left Side: Reset Password Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-8 sm:px-16 lg:px-24 xl:px-32 py-12">
        {/* Logo */}
        <Logo width="35px" textSize="text-1xl" marginStart="-ms-18"></Logo>

        {/* Header */}
        <div className="mb-8 mt-2">
          <h1 className="text-3xl font-extrabold text-slate-900 mb-2 tracking-tight">
            Reset Password
          </h1>
          <p className="text-sm font-medium text-slate-600">
            Reset your password
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* New Password Input */}
          <div className="form-control w-full">
            <label className="label py-1">
              <span className="label-text font-semibold text-xs text-slate-700">
                New Password
              </span>
            </label>

            <input
              type="password"
              placeholder="Password"
              className="input input-bordered w-full h-11 bg-white border-slate-200 text-sm focus:outline-none focus:border-slate-400 placeholder:text-slate-300"
              {...register("newPassword", {
                required: "New password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />

            {errors.newPassword && (
              <p className="text-red-500 text-xs mt-1">
                {errors.newPassword.message}
              </p>
            )}
          </div>

          {/* Confirm Password Input */}
          <div className="form-control w-full">
            <label className="label py-1">
              <span className="label-text font-semibold text-xs text-slate-700">
                Confirm Password
              </span>
            </label>

            <input
              type="password"
              placeholder="Password"
              className="input input-bordered w-full h-11 bg-white border-slate-200 text-sm focus:outline-none focus:border-slate-400 placeholder:text-slate-300"
              {...register("confirmPassword", {
                required: "Confirm password is required",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
            />

            {errors.confirmPassword && (
              <p className="text-red-500 text-xs mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* Reset Password Button */}
          <button
            type="submit"
            className="btn w-full h-11 min-h-0 bg-primary hover:bg-[#c2db59] border-none text-slate-900 font-bold normal-case text-sm shadow-none rounded-md mt-2"
          >
            Reset Password
          </button>
        </form>
      </div>

      {/* Right Side: Split Illustration Panel */}
      <AuthBanner />
    </div>
  );
}

export default ResetPasswordPage;