import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

function AcceptParcels() {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure()

    const { data: parcelToAccept = [] } = useQuery({
        queryKey: ["assignedParcelToRider", user?.email],
        enabled: !!user?.email,
        queryFn: async () => {
            const res = await axiosSecure.get(
                `/parcels?riderEmail=${user.email}`
            );
            return res.data;
        },
    });
    return (
        <div>AcceptParcels:{parcelToAccept.length}</div>
    )
}
export default AcceptParcels