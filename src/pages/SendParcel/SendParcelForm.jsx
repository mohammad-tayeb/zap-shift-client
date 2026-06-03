import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";

export default function SendParcelForm() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      parcelType: "Document",
    },
  });
  const { user } = useAuth();
  // using axios sending data to database
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  // finding available districts name using the selected region name
  const senderRegion = watch("senderRegion");
  const receiverRegion = watch("receiverRegion");

  const serviceCenters = useLoaderData();
  const regionDuplicate = serviceCenters.map((c) => c.region); // making a set of all regions
  const region = [...new Set(regionDuplicate)]; // making an array of all region no duplicate
  console.log(regionDuplicate, region);

  // finding district based on region (sender side form)
  const districtsByRegion = (region) => {
    const regionDitricts = serviceCenters.filter((c) => c.region === region); //region match kora data nibe
    const districts = regionDitricts.map((d) => d.district); //from selected data take only didtricts data
    return districts;
  };

  // finding district based on region (sender side form)
  const districtsByRegionReceiver = (region) => {
    const regionDitricts = serviceCenters.filter((c) => c.region === region); //region match kora data nibe
    const districts = regionDitricts.map((d) => d.district); //from selected data take only didtricts data
    return districts;
  };

  const onSubmit = (data) => {
    console.log("Form Data:", data);

    // parcel price calculation
    const isDocument = data.parcelType === "Document";
    const isSameDistrict = data.senderRegion === data.receiverRegion;
    const parcelWeight = parseFloat(data.parcelWeight);
    let cost;

    if (isDocument) {
      cost = isSameDistrict ? 60 : 130;
    } else {
      if (parcelWeight <= 3) {
        cost = isSameDistrict ? 110 : 150;
      } else {
        const minCharge = isSameDistrict ? 110 : 150;
        const extraWeight = parcelWeight - 3;
        const extraCharge = isSameDistrict
          ? extraWeight * 3
          : extraWeight * 3 + 40;
        cost = minCharge + extraCharge;
      }
    }
    console.log("cost:", cost);
    // parcel price calculation

    // send the cost value with the data from the form
    const parcelData = { ...data, cost: cost };
    Swal.fire({
      title: "Confirm Order?",
      text: `delivary Charge: ${cost}৳`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirm",
    }).then((result) => {
      if (result.isConfirmed) {
        //using axios secure send data
        axiosSecure
          .post("/parcels", parcelData)
          .then((res) => console.log(res.data));

        Swal.fire({
          title: "Pickup Request Submitted",
          text: "We will collect your parcel!",
          icon: "success",
        });
        reset();
        navigate("/dashboard/myParcels");
      }
    });
  };

  return (
    <div className="min-bg-[#f4f5f7] flex items-center justify-center p-4 sm:p-8">
      <div className="w-full max-w-6xl bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-100">
        {/* Header */}
        <h1 className="text-3xl font-bold text-[#003b36] mb-8">
          Send A Parcel
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          {/* Parcel Details Section */}
          <div>
            <h2 className="text-lg font-bold text-[#003b36] mb-4">
              Enter your parcel details
            </h2>

            {/* Radio Tabs */}
            <div className="flex gap-6 mb-6">
              <label className="flex items-center gap-2 cursor-pointer text-sm font-semibold text-[#003b36]">
                <input
                  type="radio"
                  value="Not-Document"
                  {...register("parcelType")}
                  className="w-4 h-4 text-green-600 border-gray-300 focus:ring-green-500 accent-emerald-600"
                />
                Regular
              </label>
              <label className="flex items-center gap-2 cursor-pointer text-sm font-semibold text-[#003b36]">
                <input
                  type="radio"
                  value="Document"
                  {...register("parcelType")}
                  className="w-4 h-4 text-green-600 border-gray-300 focus:ring-green-500 accent-emerald-600"
                />
                Document
              </label>
            </div>

            {/* Parcel Meta Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-[#003b36] mb-1.5">
                  Parcel Name
                </label>
                <input
                  type="text"
                  placeholder="Parcel Name"
                  {...register("parcelName", {
                    required: "Parcel name is required",
                  })}
                  className={`w-full px-4 py-2.5 rounded-lg border text-sm text-gray-700 bg-white placeholder-gray-300 focus:outline-none focus:ring-1 ${
                    errors.parcelName
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-200 focus:ring-emerald-600"
                  }`}
                />
                {errors.parcelName && (
                  <span className="text-xs text-red-500 mt-1">
                    {errors.parcelName.message}
                  </span>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold text-[#003b36] mb-1.5">
                  Parcel Weight (KG)
                </label>
                <input
                  type="number"
                  step="0.1"
                  placeholder="Parcel Weight (KG)"
                  {...register("parcelWeight", {
                    required: "Weight is required",
                  })}
                  className={`w-full px-4 py-2.5 rounded-lg border text-sm text-gray-700 bg-white placeholder-gray-300 focus:outline-none focus:ring-1 ${
                    errors.parcelWeight
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-200 focus:ring-emerald-600"
                  }`}
                />
                {errors.parcelWeight && (
                  <span className="text-xs text-red-500 mt-1">
                    {errors.parcelWeight.message}
                  </span>
                )}
              </div>
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* Sender & Receiver Dual Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {/* Sender Column */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-[#003b36] mb-2 tracking-wide uppercase">
                Sender Details
              </h3>

              <div>
                <label className="block text-xs font-bold text-[#003b36] mb-1.5">
                  Sender Name
                </label>
                <input
                  type="text"
                  defaultValue={user?.displayName}
                  placeholder="Sender Name"
                  {...register("senderName", {
                    required: "Sender name is required",
                  })}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-700 placeholder-gray-300 focus:outline-none focus:ring-1 focus:ring-emerald-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#003b36] mb-1.5">
                  Sender Email
                </label>
                <input
                  type="email"
                  defaultValue={user?.email}
                  placeholder="Sender Email"
                  {...register("senderEmail", {
                    required: "Email is required",
                  })}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-700 placeholder-gray-300 focus:outline-none focus:ring-1 focus:ring-emerald-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#003b36] mb-1.5">
                  Address
                </label>
                <input
                  type="text"
                  placeholder="Address"
                  {...register("senderAddress", {
                    required: "Sender address is required",
                  })}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-700 placeholder-gray-300 focus:outline-none focus:ring-1 focus:ring-emerald-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#003b36] mb-1.5">
                  Sender Phone No
                </label>
                <input
                  type="tel"
                  placeholder="Sender Phone No"
                  {...register("senderPhone", {
                    required: "Phone number is required",
                  })}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-700 placeholder-gray-300 focus:outline-none focus:ring-1 focus:ring-emerald-600"
                />
              </div>

              <div className="flex items-center justify-around gap-4">
                <div className="w-1/2">
                  <label className="block text-xs font-bold text-[#003b36] mb-1.5">
                    Your Region
                  </label>

                  <select
                    defaultValue=""
                    {...register("senderRegion", {
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
                    {...register("senderDistrict", {
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

              <div>
                <label className="block text-xs font-bold text-[#003b36] mb-1.5">
                  Pickup Instruction
                </label>
                <textarea
                  rows="4"
                  placeholder="Pickup Instruction"
                  {...register("pickupInstruction")}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-700 placeholder-gray-300 focus:outline-none focus:ring-1 focus:ring-emerald-600 resize-none"
                />
              </div>
            </div>

            {/* Receiver Column */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-[#003b36] mb-2 tracking-wide uppercase">
                Receiver Details
              </h3>

              <div>
                <label className="block text-xs font-bold text-[#003b36] mb-1.5">
                  Receiver Name
                </label>
                <input
                  type="text"
                  placeholder="Sender Name"
                  {...register("receiverName", {
                    required: "Receiver name is required",
                  })}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-700 placeholder-gray-300 focus:outline-none focus:ring-1 focus:ring-emerald-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#003b36] mb-1.5">
                  Receiver Email
                </label>
                <input
                  type="email"
                  placeholder="Receiver Email"
                  {...register("receiverEmail", {
                    required: "Receiver email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter a valid email address",
                    },
                  })}
                  className={`w-full px-4 py-2.5 rounded-lg border text-sm text-gray-700 placeholder-gray-300 focus:outline-none focus:ring-1 ${
                    errors.receiverEmail
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-200 focus:ring-emerald-600"
                  }`}
                />
                {errors.receiverEmail && (
                  <span className="text-xs text-red-500 mt-1">
                    {errors.receiverEmail.message}
                  </span>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold text-[#003b36] mb-1.5">
                  Receiver Address
                </label>
                <input
                  type="text"
                  placeholder="Address"
                  {...register("receiverAddress", {
                    required: "Receiver address is required",
                  })}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-700 placeholder-gray-300 focus:outline-none focus:ring-1 focus:ring-emerald-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#003b36] mb-1.5">
                  Receiver Contact No
                </label>
                <input
                  type="tel"
                  placeholder="Sender Contact No"
                  {...register("receiverPhone", {
                    required: "Receiver phone is required",
                  })}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-700 placeholder-gray-300 focus:outline-none focus:ring-1 focus:ring-emerald-600"
                />
              </div>
              <div className="flex items-center justify-around gap-4">
                <div className="w-1/2">
                  <label className="block text-xs font-bold text-[#003b36] mb-1.5">
                    Receiver Region
                  </label>

                  <select
                    defaultValue=""
                    {...register("receiverRegion", {
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
                    Receiver District
                  </label>
                  <select
                    defaultValue=""
                    {...register("receiverDistrict", {
                      required: "Please select a district",
                    })}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-black focus:outline-none focus:ring-1 focus:ring-emerald-600 bg-white"
                  >
                    {districtsByRegionReceiver(receiverRegion).map((r, i) => (
                      <option key={i} value="Dhaka" className="text-gray-600">
                        {r}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#003b36] mb-1.5">
                  Delivery Instruction
                </label>
                <textarea
                  rows="4"
                  placeholder="Delivery Instruction"
                  {...register("deliveryInstruction")}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-700 placeholder-gray-300 focus:outline-none focus:ring-1 focus:ring-emerald-600 resize-none"
                />
              </div>
            </div>
          </div>

          {/* Footer Info & Action Button */}
          <div className="pt-4 space-y-4">
            <p className="text-xs font-semibold text-gray-600">
              * PickUp Time 4pm-7pm Approx.
            </p>

            <button
              type="submit"
              className="bg-[#c5e763] hover:bg-[#b5d654] text-[#003b36] font-bold text-xs py-3 px-6 rounded-lg transition-colors duration-200"
            >
              Proceed to Confirm Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
