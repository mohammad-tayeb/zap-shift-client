import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useState } from "react";

function ApproveRiders() {
  const axiosSecure = useAxiosSecure();
  const [searchText, setSearchText] = useState("");
  const [status, setStatus] = useState("");
  const [selectedRider, setSelectedRider] = useState(null);

  //   load data
  const { data: riders = [], refetch, isLoading } = useQuery({
    queryKey: ["approveRiders", searchText, status],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/riders?search=${searchText}&status=${status}`,
      );
      console.log(res.data);
      return res.data;
    },
  });

  //update status to approve
  const handleApprove = (id, status, email) => {
    Swal.fire({
      title: `Are you sure?`,
      text: `This rider will be marked as ${status}.`,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: `Yes`,
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .patch(`/riders/approve/${id}`, {
            status,
            email,
          })
          .then((res) => {
            if (res.data.modifiedCount > 0) {
              Swal.fire({
                icon: "success",
                title: `${status} successfully`,
                timer: 1500,
                showConfirmButton: false,
              });

              refetch();
            }
          });
      }
    });
  };

  const handleDeleteRiderRequest = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This rider application will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/riders/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              icon: "success",
              title: "Deleted!",
              text: "Rider request has been removed.",
              timer: 1500,
              showConfirmButton: false,
            });

            refetch();
          }
        });
      }
    });
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        {/* Title */}
        <h2 className="text-3xl font-bold">
          Rider Applications: {riders.length}
        </h2>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-1/2 md:justify-end">
          {/* Status filter */}
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="select select-bordered w-full sm:w-40"
          >
            <option value="">All Status</option>
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
          </select>

          {/* Search bar */}
          <input
            type="text"
            placeholder="Search by name or email..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="input input-bordered w-full sm:w-64"
          />
        </div>
      </div>

      <div className="overflow-x-auto bg-white rounded-xl shadow">
        <table className="table w-full">
          <thead className="text-secondary">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Location</th>
              <th>Bike Info</th>
              <th>Status</th>
              <th>Created</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {riders.length === 0 && !isLoading ? (
              <tr>
                <td colSpan="8" className="text-center py-10 text-gray-500">
                  No rider applications found.
                </td>
              </tr>
            ) : (
              riders.map((rider, index) => (
                <tr
                  key={rider?._id}
                  className={`${index % 2 === 0 ? "bg-white" : "bg-gray-100"
                    } border-b border-gray-300`}
                >
                  {/* Name */}
                  <td className="font-semibold">{rider?.name}</td>

                  {/* Email */}
                  <td className="truncate max-w-45" title={rider?.email}>
                    {rider?.email}
                  </td>

                  {/* Location */}
                  <td>
                    {rider?.region} / {rider?.district}
                  </td>


                  {/* Bike Info */}
                  <td className="text-sm">
                    {rider?.bikeModel} - {rider?.bikeRegAreaType} (
                    {rider?.bikeRegNo})
                  </td>

                  {/* Status */}
                  <td>
                    {rider?.status === "approved" ? (
                      <span className="px-2 py-1 rounded text-xs font-semibold bg-green-100 text-green-700">
                        Approved
                      </span>
                    ) : rider?.status === "rejected" ? (
                      <span className="px-2 py-1 rounded text-xs font-semibold bg-red-100 text-red-700">
                        Rejected
                      </span>
                    ) : (
                      <span className="px-2 py-1 rounded text-xs font-semibold bg-yellow-100 text-yellow-700">
                        Pending
                      </span>
                    )}
                  </td>

                  {/* Created */}
                  <td className="whitespace-nowrap">
                    {new Date(rider?.createdAt).toLocaleString()}
                  </td>

                  {/* Actions */}
                  <td>
                    <div className="flex flex-col gap-2">
                      <button
                        onClick={() => setSelectedRider(rider)}
                        className="btn btn-xs btn-primary text-secondary"
                      >
                        View
                      </button>

                      {rider.status !== "approved" && (
                        <button
                          onClick={() =>
                            handleApprove(rider._id, "approved", rider?.email)
                          }
                          className="btn btn-xs btn-success"
                        >
                          Approve
                        </button>
                      )}

                      {rider.status === "pending" && (
                        <button
                          onClick={() =>
                            handleApprove(rider._id, "rejected", rider?.email)
                          }
                          className="btn btn-xs btn-warning"
                        >
                          Reject
                        </button>
                      )}

                      <button
                        onClick={() =>
                          handleDeleteRiderRequest(rider._id)
                        }
                        className="btn btn-xs btn-error"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* MODAL */}
      {selectedRider && (
        <div
          onClick={() => setSelectedRider(null)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
        >
          {/* Modal Box */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white w-[92%] md:w-[600px] rounded-2xl shadow-2xl p-6 relative"
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedRider(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center text-lg"
            >
              ✕
            </button>

            {/* Header */}
            <div className="mb-5">
              <h2 className="text-2xl font-bold text-gray-800">
                Rider Details
              </h2>
              <p className="text-sm text-gray-500">
                Full information about this rider application
              </p>
            </div>

            {/* Grid Info */}
            <div className="grid grid-cols-2 gap-4 text-sm">

              <div>
                <p className="text-gray-500">Name</p>
                <p className="font-semibold">{selectedRider.name}</p>
              </div>

              <div>
                <p className="text-gray-500">Email</p>
                <p className="font-semibold truncate">
                  {selectedRider.email}
                </p>
              </div>

              <div>
                <p className="text-gray-500">Phone</p>
                <p className="font-semibold">{selectedRider.phoneNumber}</p>
              </div>

              <div>
                <p className="text-gray-500">Status</p>
                <span
                  className={`px-2 py-1 text-xs rounded-full font-semibold
              ${selectedRider.status === "approved"
                      ? "bg-green-100 text-green-700"
                      : selectedRider.status === "rejected"
                        ? "bg-red-100 text-red-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                >
                  {selectedRider.status}
                </span>
              </div>

              <div>
                <p className="text-gray-500">Region</p>
                <p className="font-semibold">{selectedRider.region}</p>
              </div>

              <div>
                <p className="text-gray-500">District</p>
                <p className="font-semibold">{selectedRider.district}</p>
              </div>

              <div className="col-span-2">
                <p className="text-gray-500">Bike Info</p>
                <p className="font-semibold">
                  {selectedRider.bikeModel} • {selectedRider.bikeRegAreaType} •{" "}
                  {selectedRider.bikeRegNo}
                </p>
              </div>

              <div className="col-span-2">
                <p className="text-gray-500">Created At</p>
                <p className="font-semibold">
                  {new Date(selectedRider.createdAt).toLocaleString()}
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-6 flex justify-end gap-2">
              <button
                onClick={() => setSelectedRider(null)}
                className="btn btn-sm btn-ghost"
              >
                Cancel
              </button>

              <button
                onClick={() => setSelectedRider(null)}
                className="btn btn-sm btn-primary text-white"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ApproveRiders;