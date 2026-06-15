import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Link } from "react-router";

function PaymentHistory() {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: parcelsHistory = [] } = useQuery({
    queryKey: ["paymentHistory", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/parcelsHistory?email=${user.email}`
      );
      return res.data;
    },
  });

  return (
    <div className="w-full max-w-6xl mx-auto p-8 bg-white rounded-xl shadow-sm font-sans">
      {/* Header */}
      <h2 className="text-3xl font-bold text-[#052e2b] mb-8">
        Payment History
      </h2>

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
                <td className="py-5 px-6 font-medium">
                  {item.parcelName}
                </td>

                {/* Email */}
                <td className="py-5 px-6">
                  {item.customerEmail}
                </td>

                {/* Transaction ID */}
                <td className="py-5 px-6 text-xs break-all">
                  {item.transactionId}
                </td>

                {/* Amount */}
                <td className="py-5 px-6">
                  ৳ {item.amount}
                </td>

                {/* Status */}
                <td className="py-5 px-6">
                  <span
                    className={`px-2 py-1 rounded text-xs font-semibold ${
                      item.paymentStatus === "paid"
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
                  <Link
                    to={`/dashboard/payment/${item._id}`}
                    className="btn btn-sm btn-primary text-secondary w-full"
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PaymentHistory;