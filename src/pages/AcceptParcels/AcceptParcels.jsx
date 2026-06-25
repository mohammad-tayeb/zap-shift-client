import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { toast } from "react-toastify";
import Toast from "../../components/Toast/Toast";

function AcceptParcels() {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    // Fetch data
    const { data: parcelToAccept = [], refetch } = useQuery({
        queryKey: ["assignedParcelToRider", user?.email],
        enabled: !!user?.email,
        queryFn: async () => {
            const res = await axiosSecure.get(
                `/parcels?riderEmail=${user.email}`
            );
            return res.data;
        },
    });

    const handleStatusUpdate = async (id, status, message) => {
        try {
            const res = await axiosSecure.patch(`/parcelStatus/${id}`, {
                deliveryStatus: status,
            });

            if (res.data.modifiedCount > 0) {
                toast.success(message);
                refetch();
            }
        } catch (error) {
            toast.error("Failed to update status");
            console.error(error);
        }
    };

    return (
        <div className="p-4 w-full max-w-full box-border">
            <h2 className="text-xl font-bold mb-4">
                Accept Parcels ({parcelToAccept.length})
            </h2>

            <div className="w-full overflow-x-auto border border-gray-200 rounded-lg shadow-sm">
                <table className="w-full text-sm text-left border-collapse table-auto">
                    <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
                        <tr>
                            <th className="p-3">Tracking ID / Name</th>
                            <th className="p-3">Sender Details</th>
                            <th className="p-3">Receiver Details</th>
                            <th className="p-3">Cost & Weight</th>
                            <th className="p-3">Status</th>
                            <th className="p-3 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {parcelToAccept.map((parcel) => (
                            <tr key={parcel._id} className="hover:bg-gray-50">
                                {/* Tracking & Item Details */}
                                <td className="p-3 max-w-[180px] break-words">
                                    <span className="font-semibold text-blue-600 block text-xs">
                                        {parcel.trackingId}
                                    </span>
                                    <span className="font-medium text-gray-900 block">
                                        {parcel.parcelName}
                                    </span>
                                    <span className="text-xs text-gray-500 block">
                                        Type: {parcel.parcelType}
                                    </span>
                                </td>

                                {/* Sender Details */}
                                <td className="p-3 text-xs max-w-[200px] break-words">
                                    <p className="font-medium text-gray-800">{parcel.senderName}</p>
                                    <p className="text-gray-500">{parcel.senderPhone}</p>
                                    <p className="text-gray-400 italic">
                                        {parcel.senderAddress}, {parcel.senderDistrict}
                                    </p>
                                </td>

                                {/* Receiver Details */}
                                <td className="p-3 text-xs max-w-[200px] break-words">
                                    <p className="font-medium text-gray-800">{parcel.receiverName}</p>
                                    <p className="text-gray-500">{parcel.receiverPhone}</p>
                                    <p className="text-gray-400 italic">
                                        {parcel.receiverAddress}, {parcel.receiverDistrict}
                                    </p>
                                </td>

                                {/* Cost & Weight */}
                                <td className="p-3">
                                    <p className="font-semibold text-gray-900">${parcel.cost}</p>
                                    <p className="text-xs text-gray-500">{parcel.parcelWeight} kg</p>
                                </td>

                                {/* Status */}
                                <td className="p-3 text-xs">
                                    <span className="px-2 py-1 font-semibold rounded-full bg-yellow-100 text-yellow-800 block w-max capitalize">
                                        {parcel.deliveryStatus}
                                    </span>
                                    <span className="mt-1 px-2 py-0.5 font-medium rounded bg-green-100 text-green-800 block w-max uppercase text-[10px]">
                                        {parcel.payment_status}
                                    </span>
                                </td>

                                {/* Accept / Decline Actions */}
                                <td className="p-3 text-center whitespace-nowrap">
                                    <div className="flex items-center justify-center gap-2">
                                        {/* Accept */}
                                        <button
                                            disabled={
                                                parcel.deliveryStatus !== "assignedToRider"
                                            }
                                            onClick={() =>
                                                handleStatusUpdate(
                                                    parcel._id,
                                                    "parcelAcceptedByRider",
                                                    "Parcel Accepted"
                                                )
                                            }
                                            className="btn btn-xs bg-emerald-600 text-white disabled:opacity-50"
                                        >
                                            {parcel.deliveryStatus === "assignedToRider"
                                                ? "Accept"
                                                : "Accepted"}
                                        </button>

                                        {/* Pick Up */}
                                        <button
                                            disabled={
                                                parcel.deliveryStatus !== "parcelAcceptedByRider"
                                            }
                                            onClick={() =>
                                                handleStatusUpdate(
                                                    parcel._id,
                                                    "parcelPickedByRider",
                                                    "Parcel Picked Up"
                                                )
                                            }
                                            className="btn btn-xs bg-blue-600 text-white disabled:opacity-50"
                                        >
                                            {parcel.deliveryStatus === "parcelPickedByRider"
                                                ? "Picked Up"
                                                : "Pick Up"}
                                        </button>

                                        {/* Delivered */}
                                        <button
                                            disabled={
                                                parcel.deliveryStatus !== "parcelPickedByRider"
                                            }
                                            onClick={() =>
                                                handleStatusUpdate(
                                                    parcel._id,
                                                    "parcelDelivered",
                                                    "Parcel Delivered"
                                                )
                                            }
                                            className="btn btn-xs bg-purple-600 text-white disabled:opacity-50"
                                        >
                                            {parcel.deliveryStatus === "parcelDelivered"
                                                ? "Delivered"
                                                : "Deliver"}
                                        </button>

                                        {/* Decline */}
                                        <button
                                            disabled={parcel.deliveryStatus !== "assignedToRider"}
                                            className="btn btn-xs bg-red-600 text-white disabled:opacity-50"
                                        >
                                            Decline
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        {parcelToAccept.length === 0 && (
                            <tr>
                                <td colSpan="6" className="p-8 text-center text-gray-500">
                                    No parcels assigned to you yet.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            <Toast></Toast>
        </div>
    );
}

export default AcceptParcels;