import { useForm } from "react-hook-form";
import image from "../../assets/agent-pending.png";
import { useLoaderData } from "react-router";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { toast } from "react-toastify";

function BeARider() {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const senderRegion = watch("region");
  const serviceCenters = useLoaderData();
  const regionDuplicate = serviceCenters.map((c) => c.region); // making a set of all regions
  const region = [...new Set(regionDuplicate)]; // making an array of all region no duplicate

  // finding district based on region (sender side form)
  const districtsByRegion = (region) => {
    const regionDitricts = serviceCenters.filter((c) => c.region === region); //region match kora data nibe
    const districts = regionDitricts.map((d) => d.district); //from selected data take only didtricts data
    return districts;
  };

  const onSubmit = (data) => {
    axiosSecure
      .post("/riders", data)
      .then((result) => {
        if (result.data.insertedId) {
          toast.success("Application Submitted!");
        }

        reset();
      })
      .catch((error) => {
        if (error.response?.status === 409) {
          toast.error("Application Already Exists!");
        } else {
          toast.error("Something went wrong!");
        }
      });
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
                  defaultValue={user?.displayName}
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
                  defaultValue={user?.email}
                  // readOnly
                  {...register("email", { required: "Email is required" })}
                  className="w-full px-4 py-2.5 text-sm rounded-lg border border-gray-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                />
              </div>

              <div className="flex items-center justify-around gap-4">
                <div className="w-1/2">
                  <label className="block text-xs font-bold text-[#003b36] mb-1.5">
                    Your Region
                  </label>

                  <select
                    defaultValue=""
                    {...register("region", {
                      required: "Please select a region",
                    })}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-black focus:outline-none focus:ring-1 focus:ring-emerald-600 bg-white"
                  >
                    {region.map((r, i) => (
                      <option key={i} value={r} className="text-gray-600">
                        {r}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="w-1/2">
                  <label className="block text-xs font-bold text-[#003b36] mb-1.5">
                    Your District
                  </label>
                  <select
                    defaultValue=""
                    {...register("district", {
                      required: "Please select a district",
                    })}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-black focus:outline-none focus:ring-1 focus:ring-emerald-600 bg-white"
                  >
                    {districtsByRegion(senderRegion).map((r, i) => (
                      <option key={i} value="Dhaka" className="text-gray-600">
                        {r}
                      </option>
                    ))}
                  </select>
                </div>
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
              <div className="flex flex-row gap-2">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1.5 w-2/3">
                    Bike Reg. Area / Type
                  </label>

                  <select
                    {...register("bikeRegAreaType", {
                      required: "Bike registration area is required",
                    })}
                    className="w-full px-4 py-2.5 text-sm rounded-lg border border-gray-200"
                  >
                    <option value="">Select</option>

                    {/* Dhaka Metro */}
                    <option value="Dhaka Metro - L">Dhaka Metro - L</option>
                    <option value="Dhaka Metro - H">Dhaka Metro - H</option>

                    {/* Chattogram Metro */}
                    <option value="Chattogram Metro - L">
                      Chattogram Metro - L
                    </option>
                    <option value="Chattogram Metro - H">
                      Chattogram Metro - H
                    </option>

                    {/* Other Cities */}
                    <option value="Sylhet Metro - L">Sylhet Metro - L</option>
                    <option value="Sylhet Metro - H">Sylhet Metro - H</option>

                    <option value="Rajshahi Metro - L">
                      Rajshahi Metro - L
                    </option>
                    <option value="Rajshahi Metro - H">
                      Rajshahi Metro - H
                    </option>

                    <option value="Khulna Metro - L">Khulna Metro - L</option>
                    <option value="Khulna Metro - H">Khulna Metro - H</option>

                    <option value="Barishal Metro - L">
                      Barishal Metro - L
                    </option>
                    <option value="Barishal Metro - H">
                      Barishal Metro - H
                    </option>

                    <option value="Rangpur Metro - L">Rangpur Metro - L</option>
                    <option value="Rangpur Metro - H">Rangpur Metro - H</option>

                    <option value="Mymensingh Metro - L">
                      Mymensingh Metro - L
                    </option>
                    <option value="Mymensingh Metro - H">
                      Mymensingh Metro - H
                    </option>
                  </select>
                </div>
                <div className="w-1/3">
                  <label className="block text-xs font-bold text-gray-700 mb-1.5">
                    Bike Reg. No
                  </label>
                  <input
                    {...register("bikeRegNo")}
                    className="w-full px-4 py-2.5 text-sm rounded-lg border border-gray-200"
                  />
                </div>
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
