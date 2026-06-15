import { Link, useSearchParams } from "react-router";
import { CheckCircle, Copy } from "lucide-react";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";

function PaymentSuccess() {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");

  const axiosSecure = useAxiosSecure();

  const [paymentInfo, setPaymentInfo] = useState(null);
  const [copied, setCopied] = useState("");

  const handleCopy = async (text, type) => {
    if (!text) return;
    await navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(""), 1500);
  };

  useEffect(() => {
    if (sessionId) {
      axiosSecure
        .patch(`/verify-payment?session_id=${sessionId}`)
        .then((res) => {
          setPaymentInfo({
            transactionId: res.data.transactionId,
            trackingId: res.data.trackingId,
          });
        })
        .catch((err) => console.log(err));
    }
  }, [sessionId, axiosSecure]);

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
      <div className="max-w-lg w-full bg-white rounded-3xl shadow-lg p-10 text-center">
        <CheckCircle size={90} className="mx-auto text-green-500 mb-6" />

        <h1 className="text-3xl font-bold text-gray-800 mb-3">
          Payment Successful
        </h1>

        <p className="text-gray-500 mb-6">
          Your parcel booking payment has been completed successfully. Your
          shipment is now being processed.
        </p>

        {/* Tracking ID */}
        {paymentInfo?.trackingId && (
          <div className="bg-gray-50 border rounded-xl p-3 mb-3 text-left">
            <p className="text-xs text-gray-500">Tracking ID</p>
            <div className="flex justify-between items-center">
              <p className="text-sm break-all">
                {paymentInfo.trackingId}
              </p>
              <button
                onClick={() =>
                  handleCopy(paymentInfo.trackingId, "tracking")
                }
                className="flex items-center gap-1 text-blue-600 text-sm"
              >
                <Copy size={14} />
                {copied === "tracking" ? "Copied" : "Copy"}
              </button>
            </div>
          </div>
        )}

        {/* Transaction ID */}
        {paymentInfo?.transactionId && (
          <div className="bg-gray-50 border rounded-xl p-3 mb-6 text-left">
            <p className="text-xs text-gray-500">Transaction ID</p>
            <div className="flex justify-between items-center">
              <p className="text-sm break-all">
                {paymentInfo.transactionId}
              </p>
              <button
                onClick={() =>
                  handleCopy(paymentInfo.transactionId, "txn")
                }
                className="flex items-center gap-1 text-blue-600 text-sm"
              >
                <Copy size={14} />
                {copied === "txn" ? "Copied" : "Copy"}
              </button>
            </div>
          </div>
        )}

        <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-8">
          <p className="text-green-700 font-medium">
            Transaction Completed Successfully
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-3">
          <Link to="/dashboard/myParcels" className="btn btn-success flex-1">
            View Parcels
          </Link>

          <Link to="/dashboard" className="btn btn-outline flex-1">
            Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PaymentSuccess;