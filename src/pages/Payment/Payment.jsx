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
    window.location.assign(res.data.url);
  };

  const { data: parcel = {}, isLoading } = useQuery({
    queryKey: ["parcelDetails", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcel/${id}`);
      return res.data;
    },
  });

  const { data: paymentHistory = null } = useQuery({
    queryKey: ["paymentHistoryDetails", parcel?.transactionId],
    enabled: !!parcel?.transactionId,
    queryFn: async () => {
      const res = await axiosSecure.get(`/paymentHistory/${parcel.transactionId}`);
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
    <div className="min-h-screen pb-10">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-lg border border-gray-100 p-6 md:p-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <h1 className="text-2xl md:text-3xl font-bold text-[#0F3735]">
            Parcel Details
          </h1>

          {paymentHistory?.paymentStatus !== "paid" && (
            <button
              onClick={handlePayment}
              className="px-6 py-3 rounded-xl btn btn-primary text-secondary font-semibold shadow-md transition"
            >
              Pay Now
            </button>
          )}
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Sender */}
          <div className="bg-gray-50 rounded-2xl p-6 border shadow-sm">
            <h2 className="text-lg font-bold text-gray-800 mb-4">Sender Info</h2>

            <div className="space-y-3">
              <div>
                <p className="text-gray-400 text-xs">Name</p>
                <p className="font-medium text-gray-900">{parcel?.senderName}</p>
              </div>

              <div>
                <p className="text-gray-400 text-xs">Phone</p>
                <p className="font-medium text-gray-900">{parcel?.senderPhone}</p>
              </div>

              <div>
                <p className="text-gray-400 text-xs">Email</p>
                <p className="font-medium text-gray-900 break-all">{parcel?.senderEmail}</p>
              </div>

              <div>
                <p className="text-gray-400 text-xs">Region</p>
                <p className="font-medium text-gray-900">{parcel?.senderRegion}</p>
              </div>

              <div>
                <p className="text-gray-400 text-xs">Address</p>
                <p className="font-medium text-gray-900">{parcel?.senderAddress}</p>
              </div>
            </div>
          </div>

          {/* Receiver */}
          <div className="bg-gray-50 rounded-2xl p-6 border shadow-sm">
            <h2 className="text-lg font-bold text-gray-800 mb-4">Receiver Info</h2>

            <div className="space-y-3">
              <div>
                <p className="text-gray-400 text-xs">Name</p>
                <p className="font-medium text-gray-900">{parcel?.receiverName}</p>
              </div>

              <div>
                <p className="text-gray-400 text-xs">Phone</p>
                <p className="font-medium text-gray-900">{parcel?.receiverPhone}</p>
              </div>

              <div>
                <p className="text-gray-400 text-xs">Email</p>
                <p className="font-medium text-gray-900 break-all">{parcel?.receiverEmail}</p>
              </div>

              <div>
                <p className="text-gray-400 text-xs">Region</p>
                <p className="font-medium text-gray-900">{parcel?.receiverRegion}</p>
              </div>

              <div>
                <p className="text-gray-400 text-xs">Address</p>
                <p className="font-medium text-gray-900">{parcel?.receiverAddress}</p>
              </div>
            </div>
          </div>

          {/* Parcel Details */}
          <div className="md:col-span-2 bg-white border rounded-2xl shadow-sm p-6">
            <h2 className="text-lg font-bold text-gray-800 mb-6">
              Parcel Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

              <div>
                <p className="text-gray-400 text-xs">Title</p>
                <p className="font-medium text-gray-900">{parcel?.parcelName}</p>
              </div>

              <div>
                <p className="text-gray-400 text-xs">Type</p>
                <p className="font-medium text-gray-900">{parcel?.parcelType}</p>
              </div>

              <div>
                <p className="text-gray-400 text-xs">Weight</p>
                <p className="font-medium text-gray-900">{parcel?.parcelWeight}</p>
              </div>

              <div>
                <p className="text-gray-400 text-xs">Charge</p>
                <p className="font-medium text-gray-900">{parcel?.cost}</p>
              </div>

              <div>
                <p className="text-gray-400 text-xs">Status</p>
                <p className="font-medium text-green-600">
                  <b>{parcel?.payment_status}</b>
                </p>
              </div>

              <div>
                <p className="text-gray-400 text-xs">Paid At</p>
                <p className="font-medium text-gray-900">
                  {paymentHistory?.paidAt
                    ? new Date(paymentHistory.paidAt).toLocaleString()
                    : "N/A"}
                </p>
              </div>

              <div>
                <p className="text-gray-400 text-xs">Pickup Instruction</p>
                <p className="font-medium text-gray-900">
                  {parcel?.pickupInstruction || "N/A"}
                </p>
              </div>

              <div>
                <p className="text-gray-400 text-xs">Delivery Instruction</p>
                <p className="font-medium text-gray-900">
                  {parcel?.deliveryInstruction || "N/A"}
                </p>
              </div>

              <div>
                <p className="text-gray-400 text-xs">Tracking ID</p>
                <p className="font-medium text-gray-900">{parcel?.trackingId}</p>
              </div>

              <div>
                <p className="text-gray-400 text-xs">Transaction ID</p>
                <p className="font-medium text-gray-900">{parcel?.transactionId}</p>
              </div>

              <div>
                <p className="text-gray-400 text-xs">Pickup OTP</p>
                <p className="font-medium text-gray-900">{parcel?.pickupOTP}</p>
              </div>

              <div>
                <p className="text-gray-400 text-xs">Delivery OTP</p>
                <p className="font-medium text-gray-900">{parcel?.deliveryOTP}</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Payment;