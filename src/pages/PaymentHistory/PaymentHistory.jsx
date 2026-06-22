import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useState } from "react";

function PaymentHistory() {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [copyStatus, setCopyStatus] = useState("copy")

  const { data: parcelsHistory = [] } = useQuery({
    queryKey: ["paymentHistory", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcelsHistory?email=${user.email}`);
      return res.data;
    },
  });

  const handleCopy = async (text, field) => {
    await navigator.clipboard.writeText(text);
    setCopyStatus(field);

    setTimeout(() => {
      setCopyStatus("");
    }, 1500);
  };
  return (
    <div>
      <h2 className="text-3xl font-bold text-[#052e2b] mb-8">
        Payment History {parcelsHistory.length}
      </h2>
      <div className="w-full max-w-6xl mx-auto bg-white rounded-xl shadow-sm font-sans">
        {/* Table */}
        <div className="overflow-x-auto border border-gray-100 rounded-xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-100 text-sm font-medium text-gray-500">
                <th className="py-4 px-6 font-bold">Parcel Info</th>
                <th className="py-4 px-6 font-bold">Email</th>
                <th className="py-4 px-6 font-bold">Transaction ID</th>
                <th className="py-4 px-6 font-bold">Amount</th>
                <th className="py-4 px-6 font-bold">Status</th>
                <th className="py-4 px-6 font-bold">Paid At</th>
                <th className="py-4 px-6 font-bold">Action</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-50/50">
              {parcelsHistory.map((item) => (
                <tr
                  key={item._id}
                  className="text-sm text-gray-700 hover:bg-gray-50/50"
                >
                  {/* Parcel Name */}
                  <td className="py-5 px-6 font-medium">{item.parcelName}</td>

                  {/* Email */}
                  <td className="py-5 px-6">{item.customerEmail}</td>

                  {/* Transaction ID */}
                  <td className="py-5 px-6 text-xs break-all">
                    {item.transactionId}
                  </td>

                  {/* Amount */}
                  <td className="py-5 px-6">৳ {item.amount}</td>

                  {/* Status */}
                  <td className="py-5 px-6">
                    <span
                      className={`px-2 py-1 rounded text-xs font-semibold ${item.paymentStatus === "paid"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-600"
                        }`}
                    >
                      {item.paymentStatus}
                    </span>
                  </td>

                  {/* Paid At */}
                  <td className="py-5 px-6 text-xs">
                    {new Date(item.paidAt).toLocaleString()}
                  </td>

                  {/* Action */}
                  <td className="py-5 px-6">
                    <button
                      onClick={() => setSelectedPayment(item)}
                      className="btn btn-xs btn-primary text-secondary w-full"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {selectedPayment && (
        <div
          onClick={() => setSelectedPayment(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-2xl rounded-2xl bg-white shadow-2xl"
          >

            {/* Header */}
            <div className="px-6 py-5 flex items-start justify-between">
              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  Payment Details
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  Transaction overview
                </p>
              </div>

              <button
                onClick={() => setSelectedPayment(null)}
                className="text-gray-400 hover:text-gray-700 text-lg"
              >
                ✕
              </button>
            </div>

            {/* Body */}
            <div className="px-6 pb-6 space-y-6">

              {/* Top Row */}
              <div className="grid grid-cols-3 gap-6">

                <div>
                  <p className="text-xs text-gray-400 uppercase">Parcel</p>
                  <p className="text-sm text-gray-900 mt-1">
                    {selectedPayment.parcelName}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-gray-400 uppercase">Amount</p>
                  <p className="text-sm font-semibold text-gray-900 mt-1">
                    ৳ {selectedPayment.amount}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-gray-400 uppercase">Status</p>
                  <p className="text-sm mt-1">
                    {selectedPayment.paymentStatus}
                  </p>
                </div>

              </div>

              {/* Customer */}
              <div>
                <p className="text-xs text-gray-400 uppercase mb-1">
                  Customer
                </p>
                <p className="text-sm text-gray-900 break-all">
                  {selectedPayment.customerEmail}
                </p>
              </div>

              {/* Transaction */}
              <div>
                <p className="text-xs text-gray-400 uppercase mb-1">
                  Transaction ID
                </p>

                <div className="flex items-center justify-between bg-gray-200 p-2 rounded-sm">
                  <p className="text-sm text-gray-900 break-all">
                    {selectedPayment.transactionId}
                  </p>

                  <button
                    onClick={() =>
                      handleCopy(selectedPayment.transactionId, "transaction")
                    }
                    className="text-xs text-gray-500 hover:text-gray-900 ml-4"
                  >
                    {copyStatus === "transaction" ? "Copied" : "Copy"}
                  </button>
                </div>
              </div>

              {/* Tracking */}
              <div>
                <p className="text-xs text-gray-400 uppercase mb-1">
                  Tracking ID
                </p>

                <div className="flex items-center justify-between bg-gray-200 p-2 rounded-sm">
                  <p className="text-sm text-gray-900 break-all">
                    {selectedPayment.trackingId}
                  </p>

                  <button
                    onClick={() =>
                      handleCopy(selectedPayment.trackingId, "tracking")
                    }
                    className="text-xs text-gray-500 hover:text-gray-900 ml-4"
                  >
                    {copyStatus === "tracking" ? "Copied" : "Copy"}
                  </button>
                </div>
              </div>

              {/* Parcel ID */}
              <div>
                <p className="text-xs text-gray-400 uppercase mb-1">
                  Parcel ID
                </p>
                <p className="text-sm text-gray-900 break-all">
                  {selectedPayment.parcelId}
                </p>
              </div>

              {/* Time */}
              <div>
                <p className="text-xs text-gray-400 uppercase mb-1">
                  Payment Time
                </p>
                <p className="text-sm text-gray-900">
                  {new Date(selectedPayment.paidAt).toLocaleString()}
                </p>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PaymentHistory;
