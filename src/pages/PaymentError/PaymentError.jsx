import { Link } from "react-router";
import { XCircle } from "lucide-react";
function PaymentError() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
      <div className="max-w-lg w-full bg-white rounded-3xl shadow-lg p-10 text-center">
        <XCircle size={90} className="mx-auto text-red-500 mb-6" />

        <h1 className="text-3xl font-bold text-gray-800 mb-3">
          Payment Not Completed
        </h1>

        <p className="text-gray-500 mb-8">
          Your payment was cancelled or could not be processed. No amount has
          been charged.
        </p>

        <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-8">
          <p className="text-red-700 font-medium">
            Payment Failed or Cancelled
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-3">
          <Link to="/dashboard/myParcels" className="btn btn-error flex-1">
            Try Again
          </Link>

          <Link to="/dashboard" className="btn btn-outline flex-1">
            Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PaymentError;
