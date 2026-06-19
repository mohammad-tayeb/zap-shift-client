import { Navigate, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";
import ForbiddenPage from "../pages/ForbiddenPage/ForbiddenPage";

function AdminRoute({ children }) {
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
    return <Navigate state={location.pathname} to="/login"></Navigate>;
  }

  if (role !== "admin") {
    return <ForbiddenPage></ForbiddenPage>
  }

  return children;
}

export default AdminRoute;
