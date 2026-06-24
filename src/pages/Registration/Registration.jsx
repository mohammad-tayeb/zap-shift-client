import { useForm } from "react-hook-form";
import AuthBanner from "../../components/authBanner/AuthBanner";
import Logo from "../../components/logo/Logo";
import { Link, useLocation } from "react-router";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import GoogleLogin from "../../components/GoogleLogin/GoogleLogin";
import axios from "axios";
import useAxiosSecure from "../../hooks/useAxiosSecure";

function Registration() {
  const axiosSecure = useAxiosSecure();
  // navigate after registration
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();
  // navigate after registration

  // react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // react hook form

  // Registration funtionality
  const { registerUser, updateUserProfile } = useAuth();

  const onSubmit = async (data) => {
    try {
      console.log(data);

      // image file
      const profileImage = data.photo[0];

      // create user
      const result = await registerUser(data.email, data.password);

      console.log(result.user);

      // upload image to imgbb
      const formData = new FormData();
      formData.append("image", profileImage);

      const image_API_URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_imageBB
        }`;

      const res = await axios.post(image_API_URL, formData);

      //insert user in the db
      const userInfo = {
        email: data.email,
        name: data.name,
        photoURL: res.data.data.url,
      };
      axiosSecure.post("/users", userInfo).then((res) => {
        if (res.data.insertedId) {
          console.log("user inserted");
        }
      });

      // update firebase profile
      const userProfile = {
        displayName: data.name,
        photoURL: res.data.data.url,
      };
      updateUserProfile(userProfile)
        .then(() => console.log("user profile updated"))
        .catch((error) => console.log(error));

      // success
      alert("User created!");

      navigate(location?.state || "/", { replace: true });
    } catch (error) {
      console.log("Caught error:", error);
      console.log("Code:", error.code);
      console.log("Message:", error.message);

      alert(error.message);
    }
  };
  // Registration funtionality

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row font-sans bg-white">
      {/* Left Side: Registration Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-8 sm:px-16 lg:px-24 xl:px-32 md:pt-10 pt-5 pb-12">
        {/* Logo */}
        <Logo width="35px" textSize="text-1xl" marginStart="ms-20"></Logo>

        {/* Header */}
        <div className="mb-6 mt-2">
          <h1 className="text-3xl font-extrabold text-slate-900 mb-2 tracking-tight">
            Create an Account
          </h1>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name Input */}
          <div className="form-control w-full">
            <label className="label py-0.5">
              <span className="label-text font-semibold text-xs text-slate-700">
                Name
              </span>
            </label>

            <input
              type="text"
              placeholder="Name"
              className="input input-bordered w-full h-11 bg-white border-slate-200 text-sm focus:outline-none focus:border-slate-400 placeholder:text-slate-300"
              {...register("name", { required: "Name is required" })}
            />

            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email Input */}
          <div className="form-control w-full">
            <label className="label py-0.5">
              <span className="label-text font-semibold text-xs text-slate-700">
                Email
              </span>
            </label>

            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full h-11 bg-white border-slate-200 text-sm focus:outline-none focus:border-slate-400 placeholder:text-slate-300"
              {...register("email", { required: "Email is required" })}
            />

            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* photo */}
          <div className="form-control w-full">
            <label className="label py-0.5">
              <span className="label-text font-semibold text-xs text-slate-700">
                Photo
              </span>
            </label>

            <input
              type="file"
              placeholder="Upload Image"
              className="file-input w-full"
              {...register("photo", { required: "Photo is required" })}
            />

            {errors.photo && (
              <p className="text-red-500 text-xs mt-1">
                {errors.photo.message}
              </p>
            )}
          </div>

          {/* Password Input */}
          <div className="form-control w-full">
            <label className="label py-0.5">
              <span className="label-text font-semibold text-xs text-slate-700">
                Password
              </span>
            </label>

            <input
              type="password"
              placeholder="Password"
              className="input input-bordered w-full h-11 bg-white border-slate-200 text-sm focus:outline-none focus:border-slate-400 placeholder:text-slate-300"
              {...register("password", { required: "Password is required" })}
            />

            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="btn w-full h-11 min-h-0 bg-primary hover:bg-[#c2db59] border-none text-slate-900 font-bold normal-case text-sm shadow-none rounded-md mt-4"
          >
            Register
          </button>
        </form>

        {/* Divider & Login Link */}
        <div className="mt-5 text-center space-y-4">
          <p className="text-xs font-semibold text-slate-400">
            Already have an account?{" "}
            <Link
              state={location.state}
              to="/login"
              className="text-[#A2C13B] hover:underline"
            >
              Login
            </Link>
          </p>

          <div className="flex items-center justify-center text-xs font-semibold text-slate-400">
            Or
          </div>

          {/* Google Register Button */}
          <GoogleLogin></GoogleLogin>
        </div>
      </div>

      {/* Right Side */}
      <AuthBanner />
    </div>
  );
}

export default Registration;
