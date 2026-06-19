import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

function ManageUsers() {
  const axiosSecure = useAxiosSecure();

  //   load data
  const { data: users = [], refetch } = useQuery({
    queryKey: ["manageUsers"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users`);
      console.log(res.data);
      return res.data;
    },
  });

  // make user
  const handleRoleChange = (user, role) => {
    Swal.fire({
      title: "Change User Role?",
      text: `${user.name} will be changed to ${role}.`,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#6b7280",
      confirmButtonText: `Yes, make ${role}`,
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/users/${user._id}`, { role }).then((res) => {
          if (res.data.modifiedCount) {
            Swal.fire({
              title: "Success!",
              text: `${user.name} is now a ${role}.`,
              icon: "success",
              timer: 1500,
              showConfirmButton: false,
            });

            refetch();
          }
        });
      }
    });
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This user will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${id}`).then((res) => {
          if (res.data.deletedCount === 1) {
            Swal.fire({
              title: "Deleted!",
              text: "The user has been deleted successfully.",
              icon: "success",
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
    <div className="">
      <h2 className="text-3xl font-bold mb-6">Users List: {users.length}</h2>

      <div className="overflow-x-auto bg-white rounded-xl shadow">
        <table className="table">
          <thead className="text-secondary">
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Created At</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, index) => (
              <tr
                key={user?._id}
                className={`${
                  index % 2 === 0 ? "bg-white" : "bg-gray-100"
                } border-b border-gray-300`}
              >
                <td>{user?._id.slice(-5)}</td>
                <td>{user?.name}</td>

                {/* EMAIL */}
                <td>{user?.email}</td>

                {/* ROLE */}
                <td>
                  {user?.role === "admin" ? (
                    <span className="px-2 py-1 rounded text-xs font-semibold bg-purple-100 text-purple-700">
                      Admin
                    </span>
                  ) : user?.role === "rider" ? (
                    <span className="px-2 py-1 rounded text-xs font-semibold bg-green-100 text-green-700">
                      Rider
                    </span>
                  ) : (
                    <span className="px-2 py-1 rounded text-xs font-semibold bg-blue-100 text-blue-700">
                      User
                    </span>
                  )}
                </td>

                {/* CREATED AT */}
                <td className="text-sm text-gray-600">
                  {new Date(user?.createdAt).toLocaleString()}
                </td>

                {/* ACTIONS */}
                <td>
                  <div className="flex flex-col gap-2">
                    {/* View */}
                    <button className="btn btn-xs btn-primary w-full text-secondary">
                      View
                    </button>

                    {/* USER */}
                    {user.role === "user" && (
                      <>
                        <button
                          onClick={() => handleRoleChange(user, "admin")}
                          className="btn btn-xs btn-success w-full"
                        >
                          Make Admin
                        </button>

                        <button
                          onClick={() => handleRoleChange(user, "rider")}
                          className="btn btn-xs btn-warning w-full"
                        >
                          Make Rider
                        </button>
                      </>
                    )}

                    {/* ADMIN */}
                    {user.role === "admin" && (
                      <>
                        <button
                          onClick={() => handleRoleChange(user, "user")}
                          className="btn btn-xs btn-info w-full"
                        >
                          Make User
                        </button>

                        <button
                          onClick={() => handleRoleChange(user, "rider")}
                          className="btn btn-xs btn-warning w-full"
                        >
                          Make Rider
                        </button>
                      </>
                    )}

                    {/* RIDER */}
                    {user.role === "rider" && (
                      <>
                        <button
                          onClick={() => handleRoleChange(user, "user")}
                          className="btn btn-xs btn-info w-full"
                        >
                          Make User
                        </button>

                        <button
                          onClick={() => handleRoleChange(user, "admin")}
                          className="btn btn-xs btn-success w-full"
                        >
                          Make Admin
                        </button>
                      </>
                    )}

                    {/* DELETE */}
                    <button
                      onClick={() => handleDelete(user._id)}
                      className="btn btn-xs btn-error w-full"
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

export default ManageUsers;
