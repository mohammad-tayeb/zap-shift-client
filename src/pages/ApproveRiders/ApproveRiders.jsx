import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

function ApproveRiders() {
  const axiosSecure = useAxiosSecure();

  //   load data
  const { data: riders = [], refetch } = useQuery({
    queryKey: ["approveRiders"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/riders`);
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

            // optional: refetch if using react-query
            refetch();
          }
        });
      }
    });
  };

  return (
    <div className="">
      <h2 className="text-3xl font-bold mb-6">
        Rider Applications: {riders.length}
      </h2>

      <div className="overflow-x-auto bg-white rounded-xl shadow">
        <table className="table">
          <thead className="text-secondary">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Region</th>
              <th>District</th>
              <th>Phone</th>
              <th>Bike</th>
              <th>Status</th>
              <th>Created At</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {riders.map((rider, index) => (
              <tr
                key={rider?._id}
                className={`${
                  index % 2 === 0 ? "bg-white" : "bg-gray-100"
                } border-b border-gray-300`}
              >
                {/* Name */}
                <td className="font-semibold">{rider?.name}</td>

                {/* Email */}
                <td>{rider?.email}</td>

                {/* Region */}
                <td>{rider?.region}</td>

                {/* District */}
                <td>{rider?.district}</td>

                {/* Phone */}
                <td>{rider?.phoneNumber}</td>

                {/* Bike */}
                <td>
                  {rider?.bikeModel} <br /> {rider.bikeRegAreaType}{" "}
                  {rider?.bikeRegNo}
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

                {/* Created At */}
                <td>{new Date(rider?.createdAt).toLocaleString()}</td>

                {/* Actions */}
                <td>
                  <div className="flex flex-col gap-2">
                    {/* View Button */}
                    <button className="btn btn-xs btn-primary text-secondary">
                      View
                    </button>

                    {/* APPROVE */}
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

                    {/* REJECT / DELETE */}
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
                      onClick={() => handleDeleteRiderRequest(rider._id)}
                      className="btn btn-xs btn-error"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ApproveRiders;
