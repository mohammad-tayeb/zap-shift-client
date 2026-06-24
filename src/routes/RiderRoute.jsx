import { Navigate, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";
import ForbiddenPage from "../pages/ForbiddenPage/ForbiddenPage";

function RiderRoute({ children }) {
  const { user, isLoading } = useAuth();
  const { role, roleLoading } = useRole();
  const location = useLocation();

  if (isLoading || roleLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-infinity loading-xl"></span>
      </div>
    );
  }

  if (!user) {
    return (
      <Navigate
        to="/login"
        state={{ from: location }}
        replace
      />
    );
  }

  if (role !== "rider") {
    return <ForbiddenPage />;
  }

  return children;
}

export default RiderRoute;