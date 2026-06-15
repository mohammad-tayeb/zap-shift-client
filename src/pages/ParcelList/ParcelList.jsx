import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Link } from "react-router";
import Swal from "sweetalert2";

function ParcelList() {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: parcels = [], refetch } = useQuery({
    queryKey: ["myParcels", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels?email=${user.email}`);
      console.log(res.data);
      return res.data;
    },
  });

  //disable delete and edit button after 4pm
  const isBefore4PM = () => {
    const now = new Date();

    const bangladeshTime = new Date(
      now.toLocaleString("en-US", { timeZone: "Asia/Dhaka" }),
    );

    return bangladeshTime.getHours() < 16; // 16 = 4 PM
  };

  const handleParcelDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Delete Parcel PickUp Request?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/parcels/${id}`).then((res) => {
          console.log(res);
          refetch();
          if (res.data.deletedCount) {
            Swal.fire({
              title: "Deleted!",
              text: "Your parcel request has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div className="">
      <h2 className="text-3xl font-bold mb-6">My Parcels: {parcels.length}</h2>

      <div className="overflow-x-auto bg-white rounded-xl shadow">
        <table className="table">
          <thead className="text-secondary">
            <tr>
              <th>Tracking ID</th>
              <th>Parcel Name</th>
              <th>Weight</th>
              <th>Receiver Location</th>
              <th>Cost</th>
              <th>Created At</th>
              <th>Payment Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {parcels.map((parcel, index) => (
              <tr
                key={parcel?._id}
                className={`${
                  index % 2 === 0 ? "bg-white" : "bg-gray-100"
                } border-b border-gray-300`}
              >
                <td>{parcel?._id}</td>

                <td>{parcel?.parcelName}</td>

                <td>{parcel?.parcelWeight} kg</td>

                <td className="w-16">{parcel?.receiverAddress}</td>

                <td>{parcel?.cost}</td>
                <td>{new Date(parcel?.createdAt).toLocaleString()}</td>
                <td>
                  {parcel.payment_status === "paid" ? (
                    <span className="px-2 py-1 rounded text-xs font-semibold bg-green-100 text-green-700">Paid</span>
                  ) : (
                    <Link
                      to={`/dashboard/payment/${parcel._id}`}
                      className="btn btn-sm btn-primary text-secondary"
                    >
                      Pay
                    </Link>
                  )}
                </td>
                <td>
                  <Link
                    to={`/dashboard/payment/${parcel._id}`}
                    className="btn btn-sm btn-primary text-secondary w-full"
                  >
                    View
                  </Link>
                  {isBefore4PM() ? (
                    <div className="flex flex-col">
                      <button
                        onClick={() => handleParcelDelete(parcel._id)}
                        className="btn btn-sm btn-error"
                      >
                        Delete
                      </button>
                      <button
                        // onClick={() => handleEdit(parcel._id)}
                        className="btn btn-sm btn-warning"
                      >
                        Edit
                      </button>
                    </div>
                  ) : (
                    <div
                      className="flex flex-col tooltip tooltip-left"
                      data-tip="Can not edit or delete after 4pm!"
                    >
                      <button
                        disabled
                        className="btn btn-sm btn-disabled tooltip tooltip-left"
                      >
                        Delete
                      </button>
                      <button
                        disabled
                        // onClick={() => handleEdit(parcel._id)}
                        className="btn btn-sm btn-warning"
                      >
                        Edit
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ParcelList;
