import { useParams } from "react-router";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

function Payment() {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();

  const handlePayment = async () => {
    const paymentInfo = {
      cost: parcel.cost,
      parcelId: parcel._id,
      senderEmail: parcel.senderEmail,
      parcelName: parcel.parcelName,
    };

    const res = await axiosSecure.post("/create-checkout-session", paymentInfo);
    console.log(res.data);
    window.location.assign(res.data.url);
  };

  const { data: parcel = [], isLoading } = useQuery({
    queryKey: ["parcelDetails", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcel/${id}`);
      console.log(res);
      return res.data;
    },
  });
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-infinity loading-xl"></span>
      </div>
    );
  }
  return (
    <div>
      <div className="min-h-screen bg-gray-100 flex justify-center items-start font-sans">
        <div className="w-full max-w-6xl bg-white rounded-2xl shadow-sm p-4 md:p-4 border border-gray-100">
          <div className="flex flex-row justify-between mt-4">
            <h1 className="text-3xl md:text-3xl font-bold text-[#0F3735] mb-8">
              Parcel Details
            </h1>
            <button
              className="btn btn-primary text-secondary w-48"
              onClick={handlePayment}
            >
              Pay
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Sender Info Card */}
            <div className="bg-[#F4F5F6] rounded-2xl p-6">
              <h2 className="text-xl md:text-2xl font-bold text-[#1A2B32] mb-5">
                Sender Info
              </h2>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-2">
                  <span className="text-gray-400 text-sm md:text-base">
                    Name
                  </span>
                  <span className="text-[#1A2B32] font-medium col-span-2 text-sm md:text-base">
                    {parcel?.senderName}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <span className="text-gray-400 text-sm md:text-base">
                    Phone
                  </span>
                  <span className="text-[#1A2B32] font-medium col-span-2 text-sm md:text-base">
                    {parcel?.senderPhone}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <span className="text-gray-400 text-sm md:text-base">
                    Email
                  </span>
                  <span className="text-[#1A2B32] font-medium col-span-2 text-sm md:text-base break-all">
                    {parcel?.senderEmail}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <span className="text-gray-400 text-sm md:text-base">
                    Region
                  </span>
                  <span className="text-[#1A2B32] font-medium col-span-2 text-sm md:text-base">
                    {parcel?.senderRegion}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <span className="text-gray-400 text-sm md:text-base">
                    Address
                  </span>
                  <span className="text-[#1A2B32] font-medium col-span-2 text-sm md:text-base">
                    {parcel?.senderAddress}
                  </span>
                </div>
              </div>
            </div>

            {/* Receiver Info Card */}
            <div className="bg-[#F4F5F6] rounded-2xl p-6">
              <h2 className="text-xl md:text-2xl font-bold text-[#1A2B32] mb-5">
                Receiver Info
              </h2>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-2">
                  <span className="text-gray-400 text-sm md:text-base">
                    Name
                  </span>
                  <span className="text-[#1A2B32] font-medium col-span-2 text-sm md:text-base">
                    {parcel?.receiverName}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <span className="text-gray-400 text-sm md:text-base">
                    Phone
                  </span>
                  <span className="text-[#1A2B32] font-medium col-span-2 text-sm md:text-base">
                    {parcel?.receiverPhone}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <span className="text-gray-400 text-sm md:text-base">
                    Email
                  </span>
                  <span className="text-[#1A2B32] font-medium col-span-2 text-sm md:text-base break-all">
                    {parcel?.receiverEmail}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <span className="text-gray-400 text-sm md:text-base">
                    Region
                  </span>
                  <span className="text-[#1A2B32] font-medium col-span-2 text-sm md:text-base">
                    {parcel?.receiverRegion}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <span className="text-gray-400 text-sm md:text-base">
                    Address
                  </span>
                  <span className="text-[#1A2B32] font-medium col-span-2 text-sm md:text-base">
                    {parcel?.receiverAddress}
                  </span>
                </div>
              </div>
            </div>

            {/* parcel Details Card */}
            <div className="bg-[#F4F5F6] rounded-2xl p-6">
              <h2 className="text-xl md:text-2xl font-bold text-[#1A2B32] mb-5">
                Parcel details
              </h2>

              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-2">
                  <span className="text-gray-400 text-sm md:text-base">
                    Title
                  </span>
                  <span className="text-[#1A2B32] font-medium col-span-2 text-sm md:text-base">
                    {parcel?.parcelName}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <span className="text-gray-400 text-sm md:text-base">
                    Type
                  </span>
                  <span className="text-[#1A2B32] font-medium col-span-2 text-sm md:text-base">
                    {parcel?.parcelType}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <span className="text-gray-400 text-sm md:text-base">
                    Weight
                  </span>
                  <span className="text-[#1A2B32] font-medium col-span-2 text-sm md:text-base">
                    {parcel?.parcelWeight}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <span className="text-gray-400 text-sm md:text-base">
                    Charge
                  </span>
                  <span className="text-[#1A2B32] font-medium col-span-2 text-sm md:text-base">
                    {parcel?.cost}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <span className="text-gray-400 text-sm md:text-base">
                    Status
                  </span>
                  <span className="text-[#1A2B32] font-medium col-span-2 text-sm md:text-base">
                    {parcel?.status}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <span className="text-gray-400 text-sm md:text-base">
                    Pickup Instruction
                  </span>
                  <span className="text-[#1A2B32] font-medium col-span-2 text-sm md:text-base">
                    {parcel?.pickupInstruction || "N/A"}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <span className="text-gray-400 text-sm md:text-base">
                    Delivery Instruction
                  </span>
                  <span className="text-[#1A2B32] font-medium col-span-2 text-sm md:text-base">
                    {parcel?.deliveryInstruction || "N/A"}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <span className="text-gray-400 text-sm md:text-base">
                    Tracking Number
                  </span>
                  <span className="text-[#1A2B32] font-medium col-span-2 text-sm md:text-base">
                    {parcel?._id}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <span className="text-gray-400 text-sm md:text-base">
                    Pickup OTP
                  </span>
                  <span className="text-[#1A2B32] font-medium col-span-2 text-sm md:text-base">
                    {parcel?.pickupOTP}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <span className="text-gray-400 text-sm md:text-base">
                    Delivery OTP
                  </span>
                  <span className="text-[#1A2B32] font-medium col-span-2 text-sm md:text-base">
                    {parcel?.deliveryOTP}
                  </span>
                </div>
              </div>
            </div>

            <div className="hidden md:block"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
