import { Link } from "react-router";
import { CheckCircle } from "lucide-react";
function PaymentSuccess() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
      <div className="max-w-lg w-full bg-white rounded-3xl shadow-lg p-10 text-center">
        <CheckCircle size={90} className="mx-auto text-green-500 mb-6" />

        <h1 className="text-3xl font-bold text-gray-800 mb-3">
          Payment Successful
        </h1>

        <p className="text-gray-500 mb-8">
          Your parcel booking payment has been completed successfully. Your
          shipment is now being processed.
        </p>

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
