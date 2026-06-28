import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

function RiderStatics() {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    // Fetch data
    const { data: rider = [] } = useQuery({
        queryKey: ["assignedParcelToRider", user?.email],
        enabled: !!user?.email,
        queryFn: async () => {
            const res = await axiosSecure.get(
                `/rider?email=${user.email}`
            );
            return res.data;
        },
    });

    console.log(rider)
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {/* Completed Orders */}
                <div className="card bg-base-100 shadow-xl border-l-4 border-green-500">
                    <div className="card-body">
                        <h2 className="card-title text-gray-500">
                            Completed Orders
                        </h2>

                        <h1 className="text-5xl font-bold text-green-600">
                            {rider.completedDeliveries}
                        </h1>

                        <p className="text-sm text-gray-500">
                            Successfully Delivered Parcels
                        </p>
                    </div>
                </div>

                {/* Earnings */}
                <div className="card bg-base-100 shadow-xl border-l-4 border-blue-500">
                    <div className="card-body">
                        <h2 className="card-title text-gray-500">
                            Total Earnings
                        </h2>

                        <h1 className="text-5xl font-bold text-blue-600">
                            ৳ {rider.totalEarnings}
                        </h1>

                        <p className="text-sm text-gray-500">
                            Lifetime Earnings
                        </p>
                    </div>
                </div>

                {/* Rejected */}
                <div className="card bg-base-100 shadow-xl border-l-4 border-red-500">
                    <div className="card-body">
                        <h2 className="card-title text-gray-500">
                            Rejected Orders
                        </h2>

                        <h1 className="text-5xl font-bold text-red-600">
                            {rider.rejectedDeliveries || 0}
                        </h1>

                        <p className="text-sm text-gray-500">
                            Rejected Delivery Requests
                        </p>
                    </div>
                </div>
            </div>
            {/* Withdraw Earnings */}
            <div className="mt-8 bg-base-100 rounded-2xl shadow-xl border border-gray-200">
                <div className="p-6 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800">
                            Available Balance
                        </h2>

                        <p className="text-4xl font-extrabold text-secondary mt-2">
                            ৳ {rider.totalEarnings || 0}
                        </p>

                        <p className="text-sm text-gray-500 mt-2">
                            Withdraw your accumulated delivery earnings to your preferred payment method.
                        </p>
                    </div>

                    <button
                        className="btn btn-primary text-secondary btn-lg px-8"
                        disabled={!rider.totalEarnings}
                        onClick={() => {
                            // Open Cash Out Modal
                        }}
                    >
                        💰 Withdraw Earnings
                    </button>
                </div>
            </div>
        </>
    )
}
export default RiderStatics