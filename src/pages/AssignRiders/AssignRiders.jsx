import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
// import Swal from "sweetalert2";
import { useState } from "react";
import Swal from "sweetalert2";

function AssignRiders() {
  const axiosSecure = useAxiosSecure();
  const [selectedParcel, setSelectedParcel] = useState(null);
  const [matchedRiders, setMatchedRiders] = useState([]);

  // load pending parcels
  const { data: parcels = [], refetch } = useQuery({
    queryKey: ["parcels", "pending-pickup"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/parcels?deliveryStatus=pending-pickup`
      );
      return res.data;
    },
  });

  const { data: riders = [] } = useQuery({
    queryKey: ["availableRiders"],
    queryFn: async () => {
      const res = await axiosSecure.get(`riders?workStatus=available`);
      return res.data;
    },
  });

  const handleAssignRider = (parcel) => {
    const filtered = riders.filter(
      (rider) =>
        rider.workStatus === "available" &&
        rider.region === parcel.receiverRegion &&
        rider.district === parcel.receiverDistrict
    );

    setMatchedRiders(filtered);
    setSelectedParcel(parcel);
  };

  const handleConfirmAssign = (selectedParcel, rider) => {
    const info = {
      riderId: rider._id,
      riderEmail: rider.email,
      riderName: rider.name,
      parcelId: selectedParcel._id,
    };

    axiosSecure.patch(`/parcels/${selectedParcel._id}`, info)
      .then(res => {
        if (res.data.modifiedCount > 0 || res.data.success) {
          Swal.fire({
            title: "Assigned!",
            text: "Rider has been successfully assigned.",
            icon: "success",
            confirmButtonText: "OK",
          });
          refetch()
          setSelectedParcel(null)
        } else {
          Swal.fire({
            title: "Not Updated",
            text: "Something went wrong while assigning.",
            icon: "error",
          });
        }
      })
      .catch(error => {
        Swal.fire({
          title: "Error",
          text: error.message,
          icon: "error",
        });
      });
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 flex flex-row justify-around">
        <span>Unassigned Parcel: {parcels.length}</span> <span>Avilable Riders: {riders?.length || 0}</span>
      </h2>

      <div className="overflow-x-auto bg-white rounded-xl shadow">
        <table className="table">
          <thead className="text-secondary">
            <tr>
              <th>ID</th>
              <th>
                Parcel <br /> Name
              </th>
              <th>Type</th>
              <th>Weight</th>
              <th>Sender</th>
              <th>Receiver</th>
              <th>
                Receiver <br /> Region
              </th>
              <th>
                Delivery <br /> Status
              </th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {parcels.map((parcel, index) => (
              <tr
                key={parcel._id}
                className={`${index % 2 === 0 ? "bg-white" : "bg-gray-100"
                  } border-b border-gray-300`}
              >
                <td>{parcel._id.slice(-5)}</td>

                <td>{parcel.parcelName}</td>

                <td>
                  {parcel.parcelType === "not-document" ? (
                    <span>Regular</span>
                  ) : (
                    <span>Document</span>
                  )}
                </td>

                <td>{parcel.parcelWeight} kg</td>

                <td>
                  <div>
                    <p className="font-semibold">{parcel.senderName}</p>
                    <p className="text-xs text-gray-500">
                      {parcel.senderPhone}
                    </p>
                  </div>
                </td>

                <td>
                  <div>
                    <p className="font-semibold">{parcel.receiverName}</p>
                    <p className="text-xs text-gray-500">
                      {parcel.receiverPhone}
                    </p>
                  </div>
                </td>

                <td>{parcel.receiverRegion}</td>

                <td>
                  <span className="px-2 py-1 text-xs rounded bg-yellow-100 text-yellow-700">
                    {parcel.deliveryStatus || "Pending"}
                  </span>
                </td>

                <td>
                  <button
                    onClick={() => handleAssignRider(parcel)}
                    className="btn btn-xs btn-primary text-secondary w-full"
                  >
                    Assign Rider
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedParcel && (
        <div
          onClick={() => setSelectedParcel(null)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl w-[95%] max-w-3xl max-h-[85vh] overflow-y-auto p-6"
          >
            <div className="flex justify-between items-center mb-5">
              <div>
                <h2 className="text-2xl font-bold">Assign Rider</h2>
                <p className="text-gray-500">
                  {selectedParcel.parcelName}
                </p>
              </div>

              <button
                onClick={() => setSelectedParcel(null)}
                className="btn btn-circle btn-sm"
              >
                ✕
              </button>
            </div>

            {matchedRiders.length === 0 ? (
              <div className="text-center py-10 text-gray-500">
                No available riders found.
              </div>
            ) : (
              <div className="space-y-3">
                {matchedRiders.map((rider) => (
                  <div
                    key={rider._id}
                    className="border rounded-xl p-4 flex justify-between items-center"
                  >
                    <div>
                      <h3 className="font-semibold">{rider.name}</h3>

                      <p className="text-sm text-gray-500">
                        {rider.email}
                      </p>

                      <p className="text-sm">
                        {rider.region} • {rider.district}
                      </p>

                      <p className="text-sm">
                        {rider.phone}
                      </p>
                    </div>

                    <button
                      className="btn btn-primary text-secondary btn-sm"
                      onClick={() =>
                        handleConfirmAssign(selectedParcel, rider)
                      }
                    >
                      Assign
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default AssignRiders;