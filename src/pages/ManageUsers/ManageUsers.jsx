import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";

function ManageUsers() {
  const axiosSecure = useAxiosSecure();

  //   load data
  const { data: users = [] } = useQuery({
    queryKey: ["manageUsers"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users`);
      console.log(res.data);
      return res.data;
    },
  });
  return (
    <div className="">
      <h2 className="text-3xl font-bold mb-6">Users List: {users.length}</h2>

      <div className="overflow-x-auto bg-white rounded-xl shadow">
        <table className="table">
          <thead className="text-secondary">
            <tr>
              <th>User</th>
              <th>Id</th>
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
                {/* USER (photo + name) */}
                <td>
                  <div className="avatar">
                    <div className="w-10 rounded-full">
                      <img
                        src={
                          user?.photoURL ||
                          "https://i.ibb.co/2kR8q6G/default-user.png"
                        }
                        alt={user?.name}
                      />
                    </div>
                  </div>
                </td>

                <td>{user?._id}</td>

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
                    <button className="btn btn-xs btn-primary w-fit text-secondary">
                      View
                    </button>

                    {user?.role !== "admin" && (
                      <button className="btn btn-xs btn-success w-fit">
                        Make Admin
                      </button>
                    )}

                    {user?.role !== "rider" && (
                      <button className="btn btn-xs btn-warning w-fit">
                        Make Rider
                      </button>
                    )}

                    <button className="btn btn-xs btn-error w-fit">
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
