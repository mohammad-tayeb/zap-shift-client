import { useForm } from "react-hook-form";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../components/logo/Logo";
import AuthBanner from "../../components/authBanner/AuthBanner";
import useAuth from "../../hooks/useAuth";

import { Bounce, toast } from "react-toastify";
import Toast from "../../components/Toast/Toast";
import GoogleLogin from "../../components/GoogleLogin/GoogleLogin";
import { useNavigate } from "react-router";

function Login() {
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();
  // react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // react hook form

  // Login Function
  const { siginUser } = useAuth();

  const onSubmit = async (data) => {
    console.log(data);
    console.log("inloginpage:", location);
    siginUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        if (result.user) {
          toast("Welcome!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
            transition: Bounce,
          });
          navigate(location?.state || "/", { replace: true });
        }
      })
      .catch((error) => {
        console.log(error.message);

        toast(error.code, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
          transition: Bounce,
        });
      });
  };

  return (
    <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row font-sans bg-white">
      {/* Left Side: Login Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-8 sm:px-16 lg:px-24 xl:px-32 md:py-12 py-5">
        {/* Logo */}
        <Logo width="35px" textSize="text-1xl" marginStart="ms-20"></Logo>

        {/* Header */}
        <div className="mb-8 mt-2">
          <h1 className="text-3xl font-extrabold text-slate-900 mb-2 tracking-tight">
            Welcome Back
          </h1>
          <p className="text-sm font-medium text-slate-600">
            Login with ZapShift
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
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
              {...register("email", {
                required: "Email is required",
              })}
            />

            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password Input */}
          <div className="form-control w-full">
            <label className="label py-1">
              <span className="label-text font-semibold text-xs text-slate-700">
                Password
              </span>
            </label>

            <input
              type="password"
              placeholder="Password"
              className="input input-bordered w-full h-11 bg-white border-slate-200 text-sm focus:outline-none focus:border-slate-400 placeholder:text-slate-300"
              {...register("password", {
                required: "Password is required",
              })}
            />

            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Forget Password */}
          <div className="text-left">
            <Link
              to="/forgotPassword"
              className="text-xs font-medium text-slate-400 underline underline-offset-2 hover:text-slate-600 transition-colors"
            >
              Forget Password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="btn w-full h-11 min-h-0 bg-primary hover:bg-[#c2db59] border-none text-slate-900 font-bold normal-case text-sm shadow-none rounded-md mt-2"
          >
            Login
          </button>
        </form>

        {/* Divider & Registration Link */}
        <div className="mt-6 text-center space-y-4">
          <p className="text-xs font-semibold text-slate-400">
            Don't have any account?{" "}
            <Link
              state={location.state}
              to="/registration"
              className="text-[#A2C13B] hover:underline"
            >
              Register
            </Link>
          </p>

          <div className="flex items-center justify-center text-xs font-semibold text-slate-400 py-1">
            Or
          </div>

          {/* Google Login Button */}
          <GoogleLogin></GoogleLogin>
        </div>
      </div>

      {/* Right Side: Split Illustration Panel */}
      <AuthBanner></AuthBanner>
      <Toast></Toast>
    </div>
  );
}

export default Login;
