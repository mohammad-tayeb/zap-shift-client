import { useForm } from "react-hook-form";
import image from "../../assets/agent-pending.png";

function BeARider() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data Submitted:", data);
  };
  return (
    <div className="min-h-screen bg-slate-100 py-12 px-4 sm:px-6 lg:px-8 flex justify-center items-center">
      <div className="max-w-6xl w-full bg-white rounded-3xl p-8 md:p-12 shadow-sm font-sans">
        {/* Header Section */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-[#0A3622] mb-3">Be a Rider</h1>
          <p className="text-gray-500 text-xs md:text-sm max-w-2xl leading-relaxed">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to business shipments — we
            deliver on time, every time.
          </p>
        </div>

        <h2 className="text-xl font-bold text-[#0A3622] mb-6">
          Tell us about yourself
        </h2>
        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Form Side */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="lg:col-span-7 space-y-6"
          >
            {/* Form Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Your Name */}
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  {...register("name", { required: "Name is required" })}
                  className="w-full px-4 py-2.5 text-sm rounded-lg border border-gray-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                />
                {errors.name && (
                  <span className="text-xs text-red-500">
                    {errors.name.message}
                  </span>
                )}
              </div>

              {/* Driving License */}
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1.5">
                  Driving License Number
                </label>
                <input
                  type="text"
                  {...register("drivingLicense", {
                    required: "Driving license is required",
                  })}
                  className="w-full px-4 py-2.5 text-sm rounded-lg border border-gray-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                />
                {errors.drivingLicense && (
                  <span className="text-xs text-red-500">
                    {errors.drivingLicense.message}
                  </span>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  {...register("email", { required: "Email is required" })}
                  className="w-full px-4 py-2.5 text-sm rounded-lg border border-gray-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                />
                {errors.email && (
                  <span className="text-xs text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </div>

              {/* Region */}
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1.5">
                  Region
                </label>
                <select
                  {...register("region", { required: "Please select region" })}
                  className="w-full px-4 py-2.5 text-sm rounded-lg border border-gray-200"
                >
                  <option value="">Select region</option>
                  <option value="region1">Region 1</option>
                  <option value="region2">Region 2</option>
                </select>
              </div>

              {/* District */}
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1.5">
                  District
                </label>
                <select
                  {...register("district", { required: "Select district" })}
                  className="w-full px-4 py-2.5 text-sm rounded-lg border border-gray-200"
                >
                  <option value="">Select district</option>
                  <option value="district1">District 1</option>
                  <option value="district2">District 2</option>
                </select>
              </div>

              {/* NID */}
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1.5">
                  NID No
                </label>
                <input
                  {...register("nid", { required: "NID is required" })}
                  className="w-full px-4 py-2.5 text-sm rounded-lg border border-gray-200"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1.5">
                  Phone Number
                </label>
                <input
                  type="tel"
                  {...register("phoneNumber", {
                    required: "Phone number is required",
                  })}
                  className="w-full px-4 py-2.5 text-sm rounded-lg border border-gray-200"
                />
              </div>

              {/* Bike Model */}
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1.5">
                  Bike Model
                </label>
                <input
                  {...register("bikeModel")}
                  className="w-full px-4 py-2.5 text-sm rounded-lg border border-gray-200"
                />
              </div>

              {/* Bike Reg */}
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1.5">
                  Bike Reg No
                </label>
                <input
                  {...register("bikeRegNo")}
                  className="w-full px-4 py-2.5 text-sm rounded-lg border border-gray-200"
                />
              </div>

              {/* About (full width) */}
              <div className="md:col-span-2">
                <label className="block text-xs font-bold text-gray-700 mb-1.5">
                  About Yourself
                </label>
                <textarea
                  {...register("aboutYourself")}
                  className="w-full px-4 py-2.5 text-sm rounded-lg border border-gray-200"
                />
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-[#CBEA7B] text-gray-800 text-xs font-bold py-3 rounded-lg mt-4"
            >
              Submit
            </button>
          </form>

          {/* Image Side */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <img src={image} className="max-w-sm w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BeARider;
