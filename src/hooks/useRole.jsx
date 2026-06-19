import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

function useRole() {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  //   load data
  const { data: role = "user", isLoading } = useQuery({
    queryKey: ["user-role", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/${user?.email}/role`);
      console.log(res.data);
      return res.data;
    },
  });

  return { role, roleLoading: isLoading };
}

export default useRole;
