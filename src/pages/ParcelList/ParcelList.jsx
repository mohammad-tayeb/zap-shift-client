import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Link } from "react-router";

function ParcelList() {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: parcels = [] } = useQuery({
    queryKey: ["myParcels", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels?email=${user.email}`);
      console.log(res.data);
      return res.data;
    },
  });
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">My Parcels</h2>

      <div className="overflow-x-auto bg-white rounded-xl shadow">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Tracking ID</th>
              <th>Parcel Name</th>
              <th>Weight</th>
              <th>Receiver Location</th>
              <th>Cost</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {parcels.map((parcel, index) => (
              <tr key={parcel?._id}>
                <td>{index + 1}</td>

                <td>{parcel?._id}</td>

                <td>{parcel?.parcelName}</td>

                <td>{parcel?.parcelWeight} kg</td>

                <td className="w-16">{parcel?.receiverAddress}</td>

                <td>{parcel?.cost}</td>
                <td>
                  <Link
                    to={`/dashboard/parcelDetails/${parcel._id}`}
                    className="btn btn-sm btn-primary text-secondary"
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

export default ParcelList;
