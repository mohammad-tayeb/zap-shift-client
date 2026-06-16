import { useState } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router";

function Pricing() {
  const [cost, setCost] = useState(0);
  const serviceCenters = useLoaderData();
  const regionDuplicate = serviceCenters.map((c) => c.region);
  const regions = [...new Set(regionDuplicate)];
  console.log(regions);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("formData:", data);

    const isDocument = data.parcelType === "document";
    const isSameDistrict = data.senderRegion === data.receiverRegion;
    const parcelWeight = parseFloat(data.parcelWeight);
    let cost;

    if (isDocument) {
      cost = isSameDistrict ? 60 : 130;
    } else {
      if (parcelWeight < 3) {
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
    setCost(cost)
  };

  
  const handleReset = () => {
    reset();
    setCost(0);
  };
  
  return (
    <section className="max-w-7xl mx-auto bg-[#F5F5F5] rounded-[30px] px-8 md:px-16 py-12 my-10">
      {/* Header */}
      <div>
        <h1 className="text-5xl font-bold text-[#03363D] mb-4">
          Pricing Calculator
        </h1>

        <p className="max-w-xl text-gray-500 leading-relaxed">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>
      </div>

      <div className="border-t border-gray-300 my-10"></div>

      {/* Content */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-md mx-auto w-full space-y-5"
        >
          {/* Parcel Type */}
          <div>
            <label className="block mb-2 text-sm font-medium">
              Parcel type
            </label>

            <select
              {...register("parcelType", {
                required: "Select parcel type",
              })}
              className="select select-bordered w-full"
            >
              <option value="">Select Parcel type</option>
              <option value="regular">Regular</option>
              <option value="document">Document</option>
            </select>

            {errors.parcelType && (
              <p className="text-red-500 text-sm mt-1">
                {errors.parcelType.message}
              </p>
            )}
          </div>

          {/* Sender Region */}
          <div>
            <label className="block mb-2 text-sm font-medium">
              Sender Region
            </label>

            <select
              {...register("region", {
                required: "Select sender region",
              })}
              className="select select-bordered w-full"
            >
              {regions.map((region, index) => (
                <option key={index} value={region}>
                  {region}
                </option>
              ))}
            </select>

            {errors.senderRegion && (
              <p className="text-red-500 text-sm mt-1">
                {errors.senderRegion.message}
              </p>
            )}
          </div>

          {/* Receiver Region */}
          <div>
            <label className="block mb-2 text-sm font-medium">
              Receiver Region
            </label>

            <select
              {...register("receiverRegion", {
                required: "Select receiver region",
              })}
              className="select select-bordered w-full"
            >
              {regions.map((region, index) => (
                <option key={index} value={region}>
                  {region}
                </option>
              ))}
            </select>

            {errors.receiverRegion && (
              <p className="text-red-500 text-sm mt-1">
                {errors.receiverRegion.message}
              </p>
            )}
          </div>

          {/* Weight */}
          <div>
            <label className="block mb-2 text-sm font-medium">
              Weight (KG)
            </label>

            <input
              type="number"
              step="0.1"
              placeholder="Enter weight"
              {...register("parcelWeight", {
                required: "Weight is required",
                min: {
                  value: 0.1,
                  message: "Weight must be greater than 0",
                },
              })}
              className="input input-bordered w-full"
            />

            {errors.parcelWeight && (
              <p className="text-red-500 text-sm mt-1">
                {errors.parcelWeight.message}
              </p>
            )}
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-2">
            <button
              type="button"
              onClick={handleReset}
              className="btn border-[#B8D85A] text-[#03363D] bg-transparent hover:bg-transparent"
            >
              Reset
            </button>

            <button
              type="submit"
              className="btn flex-1 bg-[#C7E75A] border-none text-black hover:bg-[#B9DB48]"
            >
              Calculate
            </button>
          </div>
        </form>

        {/* Price Display */}
        <div className="flex justify-center items-center">
          <h1 className="text-7xl md:text-8xl font-extrabold text-black">
            {cost} Tk
          </h1>
        </div>
      </div>
    </section>
  );
}
export default Pricing;
