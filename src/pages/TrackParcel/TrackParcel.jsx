import { useQuery } from "@tanstack/react-query";
import { Search, CheckCircle2 } from "lucide-react";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useState } from "react";

function TrackParcel() {
  const axiosSecure = useAxiosSecure()
  const [searchedId, setSearchedId] = useState("")

  const {
    register,
    handleSubmit,
    isLoading,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Tracking ID:", data.trackingId);
    setSearchedId(data?.trackingId)
  };

  // load pending parcels
  const { data: parcel = null } = useQuery({
    queryKey: ["parcel", searchedId],
    enabled: !!searchedId,
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/track/${searchedId}`
      );
      console.log(res.data);
      return res.data;
    },
  });

  const trackingSteps = [
    {
      key: "pending-pickup",
      label: "Pending Pickup",
    },
    {
      key: "riderAssigned",
      label: "Rider Assigned",
    },
    {
      key: "out-for-collection",
      label: "Out for Collection",
    },
    {
      key: "parcel-collected",
      label: "Parcel Collected",
    },
    {
      key: "in-transit",
      label: "In Transit",
    },
    {
      key: "arrived-at-destination-hub",
      label: "Arrived at Destination Hub",
    },
    {
      key: "out-for-delivery",
      label: "Out for Delivery",
    },
    {
      key: "delivered",
      label: "Delivered",
    },
  ];

  const currentStepIndex = trackingSteps.findIndex(
    (step) => step.key === parcel?.deliveryStatus
  );



  console.log("searchedId:", searchedId);
  console.log("parcel:", parcel);
  console.log("typeof parcel:", typeof parcel);

  return (
    <div className=" bg-gray-50 flex items-center justify-center p-6 antialiased font-sans">
      <div className="w-full max-w-7xl bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12">
        {/* Header Section */}
        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#003B31] tracking-tight">
            Track Your Consignment
          </h1>
          <p className="text-xs text-gray-400 mt-2 font-medium">
            Now you can easily track your consignment
          </p>
        </header>

        {/* Search Bar Section */}
        <form onSubmit={handleSubmit(onSubmit)} className="relative flex items-center max-w-xl mb-12">
          <div className="absolute left-4 text-gray-400">
            <Search className="w-4 h-4" />
          </div>
          <input
            disabled={isLoading}
            type="text"
            placeholder="Search tracking id here"
            {...register("trackingId")}
            className="w-full bg-[#F0F2F5] text-xs font-medium text-gray-600 pl-11 pr-28 py-3.5 rounded-full focus:outline-none placeholder-gray-400 disabled:opacity-60"
          />

          <button
            disabled={isLoading}
            type="submit"
            className="absolute right-1.5 top-1.5 bottom-1.5 bg-[#C5E75D] hover:bg-[#b6d84c] disabled:opacity-60 text-xs font-bold text-[#003B31] px-7 rounded-full transition-colors"
          >
            {isLoading ? "Searching..." : "Search"}
          </button>
        </form>

        <hr className="border-gray-100 mb-10" />
        {isLoading && (
          <div className="py-20 flex justify-center">
            <span className="loading loading-spinner loading-lg text-[#003B31]"></span>
          </div>
        )}

        {searchedId && !parcel && (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-red-500">
              Tracking ID not found
            </h2>
            <p className="text-gray-500 mt-2">
              Please check your tracking code and try again.
            </p>
          </div>
        )}

        {/* Main Content Grid */}
        {parcel &&
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Left Column: Product Details */}
            <div className="bg-[#F0F2F5] rounded-3xl p-8 min-h-36.25 flex flex-col justify-between">
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-[#003B31] mb-6">
                  Product Details
                </h2>

                <div className="space-y-5 text-[13px] text-gray-600 font-medium">
                  {parcel?.createdAt && (
                    <p className="text-gray-400 text-xs">
                      {new Date(parcel.createdAt).toLocaleString(undefined, {
                        dateStyle: "medium",
                        timeStyle: "short",
                      })}
                    </p>
                  )}

                  {/* Core Identification Codes */}
                  <div className="space-y-2">
                    <p>
                      <span className="text-gray-400">Parcel ID:</span>{" "}
                      <span className="font-semibold text-gray-800">{parcel?._id || "—"}</span>
                    </p>
                    <p>
                      <span className="text-gray-400">Transaction ID:</span>{" "}
                      <span className="font-mono text-gray-800">{parcel?.transactionId || "—"}</span>
                    </p>
                    <p className="break-all">
                      <span className="text-gray-400">Tracking Code:</span>{" "}
                      <span className="font-mono text-gray-800">{parcel?.trackingId || "—"}</span>
                    </p>
                  </div>

                  <hr className="border-gray-200/60 my-4" />

                  {/* Sender Information */}
                  <div className="space-y-2">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#003B31]/70 mb-1">
                      Sender Logistics
                    </p>
                    <p>
                      <span className="text-gray-400">Name:</span> {parcel?.senderName || "—"}
                    </p>
                    <p className="leading-relaxed">
                      <span className="text-gray-400">Address:</span>{" "}
                      {[parcel?.senderAddress, parcel?.senderDistrict, parcel?.senderRegion]
                        .filter(Boolean)
                        .join(", ") || "—"}
                    </p>
                    <p>
                      <span className="text-gray-400">Phone:</span> {parcel?.senderPhone || "—"}
                    </p>
                  </div>

                  <hr className="border-gray-200/60 my-4" />

                  {/* Receiver Information */}
                  <div className="space-y-2">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#003B31]/70 mb-1">
                      Delivery Destination
                    </p>
                    <p>
                      <span className="text-gray-400">Name:</span> {parcel?.receiverName || "—"}
                    </p>
                    <p className="leading-relaxed">
                      <span className="text-gray-400">Address:</span>{" "}
                      {[parcel?.receiverAddress, parcel?.receiverDistrict, parcel?.receiverRegion]
                        .filter(Boolean)
                        .join(", ") || "—"}
                    </p>
                    <p>
                      <span className="text-gray-400">Phone:</span> {parcel?.receiverPhone || "—"}
                    </p>
                  </div>

                  <hr className="border-gray-200/60 my-4" />

                  {/* Package Specs & Financials */}
                  <div className="pt-2 space-y-2.5">
                    <p>
                      <span className="text-gray-400">Parcel Type:</span> {parcel?.parcelType || "—"}
                    </p>
                    <p>
                      <span className="text-gray-400">Weight:</span>{" "}
                      {parcel?.parcelWeight ? `${parcel.parcelWeight} KG` : "—"}
                    </p>
                    <p>
                      <span className="text-gray-400">Delivery Charge:</span>{" "}
                      <span className="text-gray-800 font-semibold">৳ {parcel?.cost ?? 0}</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-gray-400">Payment status:</span>{" "}
                      <span
                        className={`inline-block px-2.5 py-0.5 rounded text-[11px] font-bold tracking-wide uppercase ${parcel?.payment_status === "paid"
                          ? "bg-emerald-100 text-emerald-800"
                          : "bg-amber-100 text-amber-800"
                          }`}
                      >
                        {parcel?.payment_status || "UNPAID"}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Tracking Updates */}
            <div className="bg-[#F8FAFC] rounded-3xl p-8 min-h-[580px] border border-gray-200">
              <h2 className="text-2xl font-bold text-[#003B31] mb-8">
                Tracking Updates
              </h2>

              <div className="relative ml-5">
                {/* Timeline */}
                <div className="absolute left-[15px] top-0 bottom-0 w-[2px] bg-gray-200"></div>

                {trackingSteps.map((step, index) => {
                  const isCompleted = index < currentStepIndex;
                  const isCurrent = index === currentStepIndex;

                  return (
                    <div
                      key={step.key}
                      className="relative flex gap-5 pb-8 last:pb-0"
                    >
                      {/* Connector */}
                      {index !== trackingSteps.length - 1 && (
                        <div
                          className={`absolute left-4 top-8 h-full w-0.5 ${index < currentStepIndex
                            ? "bg-emerald-500"
                            : "bg-gray-200"
                            }`}
                        />
                      )}

                      {/* Icon */}
                      <div
                        className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center
        ${isCompleted
                            ? "bg-emerald-500"
                            : isCurrent
                              ? "bg-blue-600 ring-4 ring-blue-100"
                              : "bg-gray-300"
                          }`}
                      >
                        {isCompleted ? (
                          <CheckCircle2 className="w-5 h-5 text-white" />
                        ) : isCurrent ? (
                          <div className="w-3 h-3 rounded-full bg-white animate-pulse" />
                        ) : (
                          <div className="w-3 h-3 rounded-full bg-gray-500" />
                        )}
                      </div>

                      {/* Card */}
                      <div
                        className={`flex-1 rounded-2xl border p-5 transition
        ${isCompleted
                            ? "bg-emerald-50 border-emerald-200"
                            : isCurrent
                              ? "bg-blue-50 border-blue-300 shadow-md"
                              : "bg-white border-gray-200"
                          }`}
                      >
                        <div className="flex justify-between items-center">
                          <h3
                            className={`font-semibold ${isCompleted
                              ? "text-emerald-700"
                              : isCurrent
                                ? "text-blue-700"
                                : "text-gray-500"
                              }`}
                          >
                            {step.label}
                          </h3>

                          <span
                            className={`text-xs font-semibold px-3 py-1 rounded-full
            ${isCompleted
                                ? "bg-emerald-100 text-emerald-700"
                                : isCurrent
                                  ? "bg-blue-100 text-blue-700"
                                  : "bg-gray-100 text-gray-500"
                              }`}
                          >
                            {isCompleted
                              ? "Completed"
                              : isCurrent
                                ? "Current"
                                : "Pending"}
                          </span>
                        </div>

                        {(isCompleted || isCurrent) && parcel?.createdAt && (
                          <p className="text-xs text-gray-500 mt-3">
                            {new Date(parcel.createdAt).toLocaleString(undefined, {
                              dateStyle: "medium",
                              timeStyle: "short",
                            })}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        }

      </div>
    </div>
  );
}

export default TrackParcel;